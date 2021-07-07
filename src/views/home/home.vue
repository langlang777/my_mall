<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center> 购物街 </template>
    </nav-bar>
    <!-- banner 数据给子组件 -->
    <swiper-child :banner = 'banner'></swiper-child>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import SwiperChild from './childComponets/swiperchild.vue'
import RecommendView from './childComponets/recommendView.vue'
import FeatureView from './childComponets/FeatureView.vue'
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
    SwiperChild,
    RecommendView,
    FeatureView
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
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.swiperimg {
  width: 100%;
}
</style>