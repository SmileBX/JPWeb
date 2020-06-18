<template>
  <div :model="query" style="text-align: center;">
    <div class="title">
      <el-row>
        <el-col :span="24">
          <div class="grid-title">
            <h2>{{this.bookName}}</h2>
          </div>
          <div class="grid-title">
            <h3 style="display: inline-block;">简介： {{this.bookTitle}}</h3>
          </div>
          <div class="grid-title">
            <h4 style="display: inline-block;">作者： {{this.authorName}}</h4>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="elBox yellow">
      <el-row>
        <div style>
          <el-col :span="6" v-for="item in list" :key="item.sectionIndex">
            <a href="javascript:void(0)">
              <div
                class="grid-content underline"
                @click="getSectionContent(item)"
              >{{ item.sectionName}}</div>
            </a>
          </el-col>
        </div>
      </el-row>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handlePageChange"
      :page-size="pageSize"
      :total="total"
    ></el-pagination>
  </div>
</template>


<style>
.title {
  width: 80%;
  margin-left: 135px;
  border: 1px solid #000;
}
.yellow {
  width: 80%;
  margin-left: 70px;
  margin-top: 20px;
  background-color: rgb(245, 243, 230);
}
.grid-title {
  color: black;
  margin-top: 10px;
}
.grid-content {
  color: black;
  margin-top: 30px;
}
.elBox {
  width: 90%;
}
.underline:hover {
  text-decoration: underline;
}
</style>
<script>
import { get } from "../../api/request/ajax";

export default {
  data() {
    return {
      list: [],
      pageSize: 28,
      currentPage: 1,
      bookName: "",
      authorName: "",
      bookTitle: "",
      query: {
        bookGuid: 1579340920953,
        pageIndex: 1,
        pageSize: 28
      },
      bookQuery: {
        bookGuid: 0
      },
      total: 0
    };
  },
  methods: {
    handlePageChange(page) {
      this.query.pageIndex = page;
      this.innerGetSectionList();
    },
    innerGetSectionList() {
      get("/book/bookInfo", this.query).then(response => {
        this.bookName = response.data.bookName;
        this.bookTitle = response.data.title;
        this.authorName = response.data.authorName;
      });

      get("/book/sections", this.query).then(response => {
        this.list = response.data.data;
        this.total = response.data.count;
      });
    },
    getSectionContent(param) {
      let sectionIndex = param.sectionIndex;
      this.$router.push({
        path: "/books/content",
        query: { bookGuid: this.query.bookGuid, sectionIndex: sectionIndex }
      });
    }
  },
  created() {
    this.query.bookGuid = this.$route.query.bookGuid;
    this.innerGetSectionList();
  }
};
</script>