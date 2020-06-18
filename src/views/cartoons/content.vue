<template>
  <div>
    <div style="text-align: center;" v-on:click="returnSectionList(query.cartoonGuid)">
      <el-button style="font-weigth:bold" round>返回章节列表</el-button>
    </div>
    <div style="text-align: center;">
      <span style="color:black">
        <h2>{{this.currentIndex}}</h2>
      </span>
    </div>
    <div class="demo-image__lazy title">
      <el-image v-for="url in urls" :key="url" :src="url" style="height:80%;width:100%" lazy></el-image>
    </div>
    <el-row>
      <div class="blockToInLineBlock leftButton" v-on:click="goPath(query.cartoonGuid,preIndex)">
        <!-- <a href="http://www.baidu.com"> -->
        <el-button style="font-weigth:bold" round>上一章</el-button>
        <!-- </a> -->
      </div>

      <div
        class="blockToInLineBlock rigthButton"
        style="float:right"
        v-on:click="goPath(query.cartoonGuid,afterIndex)"
      >
        <el-button round>下一章</el-button>
      </div>
    </el-row>
  </div>
</template>

<style >
.title {
  width: 55%;
  margin-left: 22%;
  margin-top: 10px;
}
.rigthButton {
  position: relative;
  right: 100px;
  top: 10px;
}
.leftButton {
  position: relative;
  left: 155px;
  top: 10px;
}
.blockToInLineBlock {
  display: inline-block;
}
</style>
<script>
import { get } from "../../api/request/ajax";
export default {
  data() {
    return {
      preIndex: 1,
      afterIndex: 1,
      currentIndex: 1,
      query: {},
      urls: []
    };
  },
  methods: {
    innerGetCartoonContent(cartoonGuid, sectionIndex) {
      this.query.sectionIndex = sectionIndex;
      this.query.cartoonGuid = cartoonGuid;

      get("/cartoon/content", this.query)
        .then(response => {
          if (!response.data) {
            alert("已经是最后一章了");
          }
          this.urls = response.data.contentUrls;
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
    goPath(cartoonGuid, index) {
      this.$router.push({
        path: "/cartoons/content",
        query: { cartoonGuid: cartoonGuid, sectionIndex: index }
      });
    },
    returnSectionList(cartoonGuid) {
      this.$router.push({
        path: "/cartoons/section",
        query: { cartoonGuid: cartoonGuid }
      });
    }
  },
  created() {
    this.innerGetCartoonContent(
      this.$route.query.cartoonGuid,
      this.$route.query.sectionIndex
    );
  },
  watch: {
    $route() {
      this.innerGetCartoonContent(
        this.$route.query.cartoonGuid,
        this.$route.query.sectionIndex
      );
    }
  }
};
</script>