<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center> 购物街 </template>
    </nav-bar>
    <Scroll class="scroll">
      <!-- banner 数据给子组件 -->
      <swiper-child :banner="banner"></swiper-child>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <TabControl
        :titles="title"
        class="tabcontrol"
        @tabclick="tabclick"
      ></TabControl>
      <GoodsList :goods="showgoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backtopclick"></BackTop>
  </div>
</template>

<script>
// 导入公共组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/goodslist";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backtop/BackTop.vue"

// 导入子组件
import SwiperChild from "./childComponets/swiperchild.vue";
import RecommendView from "./childComponets/recommendView.vue";
import FeatureView from "./childComponets/FeatureView.vue";

// 导入网络请求
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  data() {
    return {
      banner: [],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    NavBar,
    SwiperChild,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  // 通过生命周期函数 调用 网络请求
  created() {
    // 请求banner recommends
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 监听
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backtopclick(){
      console.log(11);
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, 1).then((res) => {
        // list1.push(...[1,2,3,4]) 可以将里面的【1234】 拆开传入 list1
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style >
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tabcontrol {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>