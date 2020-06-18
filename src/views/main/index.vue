<template>
  <div style="height: 100%;">
    <div class="partition">
      <span class="innerTitle">
        <a
          href="javascript:void(0)"
          @click="enterIn('/cartoons/cartoon')"
          style="color: red;font-size:45px"
        >漫画区>>>点击进入</a>
      </span>
    </div>
    <div class="partition">
      <span class="innerTitle">
        <a
          href="javascript:void(0)"
          @click="enterIn('/videos/video')"
          style="color: red;font-size:45px;"
        >视频区>>>点击进入</a>
      </span>
    </div>
    <div class="partition">
      <span class="innerTitle">
        <a
          href="javascript:void(0)"
          @click="enterIn('/books/book')"
          style="color: red;font-size:45px;"
        >小说区>>>点击进入</a>
      </span>
    </div>
  </div>
</template>

<style>
.partition {
  width: 33%;
  height: 100%;
  border: 1px black solid;
  display: inline-block;
}
.innerTitle {
  margin-top: 25%;
  margin-left: 10%;
  display: inline-block;
}
</style>
<script>
export default {
  methods: {
    enterIn(item) {
      this.$router.push({
        path: item
      });
    }
  }
};
</script>