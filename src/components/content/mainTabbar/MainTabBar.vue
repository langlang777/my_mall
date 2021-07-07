<template>
  <tab-bar>
    <!-- 如果要将 父组件的动态数据传时候 才需要 ： 号 -->
    <!-- 下面传单个定死数据不需要 ： -->
    <!-- 在dom 里面使用别名 要用 ~ -->
    <tab-bar-item path="/home" activecolor="deeppink">
      <template v-slot:item-icon>
        <img src="~assets\img\tabbar\home.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets\img\tabbar\home_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activecolor="deeppink">
      <template v-slot:item-icon>
        <img src="~assets\img\tabbar\category.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets\img\tabbar\category_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activecolor="deeppink">
      <template v-slot:item-icon>
        <img src="~assets\img\tabbar\cart.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets\img\tabbar\cart_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activecolor="deeppink">
      <template v-slot:item-icon>
        <img src="~assets\img\tabbar\profile.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets\img\tabbar\profile_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>