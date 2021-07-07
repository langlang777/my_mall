<template>
  <div class="tab-bar-item" @click='btnclick'>
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!-- :class="{active:isActive}" 活跃时 使用active css样式 -->
    <!-- 样式不能直接设置在插槽 会被直接替换 不起效果 -->
    <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
    <div :style="getstyle"><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            // isActive:false, 
        }
    },
    // 让父组件调用点击时 传回点击了的链接 数据给子组件
    // 在父组件调用 子组件 的位置 app.vue 定一个同样的 变量名
    props:{
      path:String,
      activecolor:{
        type: String,
        default:'red'
      }
      // activecolor:String
    },
    computed:{
      isActive(){
        // 将活跃的路由地址 和返回的路由地址 进行 匹配
        // true 就有css
        const url = this.$route.path
        // console.log(url);
        return url.indexOf(this.path) !== -1
      },
      getstyle(){
        // 三目运算  true/false ?  to do true : to do false
        return this.isActive ? {color:this.activecolor} : {}
      }
    },
    methods: {
      btnclick(){
        this.$router.push(this.path)
      }
    },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
    color: red;
} */
</style>