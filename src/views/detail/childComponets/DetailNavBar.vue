<template>
  <div>
    <nav-bar>
      <template v-slot:left>
          <div class="backimg" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
          </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            class="titlename"
            v-for="(item, index) in titles"
            :key="item"
            :class="{ active: index === currentIndex }"
            @click="titleclick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleclick(index) {
      this.currentIndex = index;
    },
    back(){
        // 相当于浏览器返回
        this.$router.back()
    }
  },
};
</script>

<style>
.title {
  display: flex;
}
.titlename {
  flex: 1;
  font-style: 13px;
}
.active {
  color: deeppink;
}
.backimg{
    margin-top: 5px;
}
</style>