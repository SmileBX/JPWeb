<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix txtCenter">
      <span class="bookTitle">{{this.title}}</span>
    </div>
    <div style="text-align: center;" class="text item" v-html="content"></div>
    <el-row>
      <div class="blockToInLineBlock leftButton" v-on:click="goPath(query.bookGuid,preIndex)">
        <!-- <a href="http://www.baidu.com"> -->
        <el-button round>上一章</el-button>
        <!-- </a> -->
      </div>
      <div
        class="blockToInLineBlock rigthButton"
        style="float:right"
        v-on:click="goPath(query.bookGuid,afterIndex)"
      >
        <el-button round>下一章</el-button>
      </div>
    </el-row>
  </el-card>
</template>
<style>
.rigthButton {
  position: relative;
  right: 100px;
}
.leftButton {
  position: relative;
  left: 100px;
}

.el-row {
  margin-bottom: 2px;
}

.blockToInLineBlock {
  display: inline-block;
}

.bg-purple-dark {
  background: white;
  color: black;
}
.txtCenter {
  text-align: center;
}
.bookTitle {
  font-weight: bold;
  font-size: large;
}
</style>
<script>
import { get } from "../../api/request/ajax";

export default {
  data() {
    return {
      title: "",
      content: "",
      preIndex: 1,
      afterIndex: 1,
      currentIndex: 1,
      query: {}
    };
  },
  methods: {
    innerGetBookContent(bookGuid, sectionIndex) {
      this.query.sectionIndex = sectionIndex;
      this.query.bookGuid = bookGuid;
      get("/book/content",this.query)
        .then(response => {
          if (!response.data) {
            alert("已经是最后一章了");
          }
          this.title = response.data.sectionName;
          this.content = response.data.content;
          this.currentIndex = response.data.sectionIndex;

          if (this.currentIndex == 1) {
            this.preIndex = 1;
          } else {
            this.preIndex = this.currentIndex - 1;
          }
          this.afterIndex = this.currentIndex + 1;
        })
        .catch(() => {});
    },
    goPath(bookGuid, index) {
      this.$router.push({
        path: "/books/content",
        query: { bookGuid: bookGuid, sectionIndex: index }
      });
    }
  },
  created() {
    this.innerGetBookContent(
      this.$route.query.bookGuid,
      this.$route.query.sectionIndex
    );
  },
  watch: {
    $route() {
      this.innerGetBookContent(
        this.$route.query.bookGuid,
        this.$route.query.sectionIndex
      );
    }
  }
};
</script>