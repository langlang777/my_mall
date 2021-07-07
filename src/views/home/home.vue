<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center> 购物街 </template>
    </NavBar>
    <!-- banner 数据给子组件 -->
    <SwiperChild :banner = 'banner'></SwiperChild>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import SwiperChild from './swiperchild.vue'
import { getHomeMultidata } from "network/home.js";

export default {
  data() {
    return {
      banner: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    SwiperChild
  },
  // 通过生命周期函数 调用 网络请求
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
.swiperimg {
  width: 100%;
}
</style>