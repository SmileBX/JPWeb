<template>
  <div class="block" :model="query">
    <el-row :gutter="30">
      <el-col  :xs="{span: 12,offset:0}" :sm="{span: 8}" :md="{span: 6}" :lg="{span: 6}" :xl="{span: 6}" v-for="item in list" :key="item.guid">
        <a href="javascript:void(0)" @click="enterIn(item)">
          <el-card :body-style="{ padding: '0px'}" class="item">
            <el-image style="max-width:100%;height:200px" :src="item.coverUrl"></el-image>
              <div class="bookName">{{ item.bookName | ellipsis }}</div>
          </el-card>
        </a>
      </el-col>
    </el-row>
    <div style="text-align: center;">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        @current-change="handlePageChange"
        :page-size="query.pageSize"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<style>

.bookName{
    font-weight: bold;
    font-size: large;
    border: 1px solid #000;
    text-align: center;
}
.el-col {
  border-radius: 1px;
}
.item {
  padding: 0px;
  margin: 2%;
}
</style>

<script>
import { get } from "../../api/request/ajax";

export default {
   filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 8) {
        return value.slice(0,8) + '...'
      }
      return value
    }
  },
  data() {
    return {
      list: [],
      // https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2669931844,1359878584&fm=26&gp=0.jpg
      
      url: "http://wx2.sinaimg.cn/crop.0.0.800.449.1000/ee36c639gy1fh321yui3pj20m80engvf.jpg",
      query: {
        pageIndex: 1,
        pageSize: 16
      },
      total: 0,
      page: 0
    };
  },
  methods: {
    handlePageChange(page) {
      this.query.pageIndex = page;
      this.getBookList();
    },
    getBookList() {
      get("/book/list",this.query)
        .then(response => {
          this.list = response.data.data || [];
          this.total = response.data.count || 0;
        })
        .catch(() => {
          this.list = [];
          this.total = 0;
        });
    },
    enterIn(item) {
      this.$router.push({
        path: "/books/section",
        query: { bookGuid: item.guid }
      });
    }
  },
  created() {
    let query = this.$route.query;
    this.query = Object.assign(this.query, query);
    this.getBookList();
  }
};
</script>
