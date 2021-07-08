<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            scroll:null
        }
    },
    // 生命周期函数 当组件挂着时调用
    // this.$refs.wrapper 获取绑定 ref 的 元素 如果绑定在组件上 就是组件对象
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM:true,
            click:true
        })
    }
}
</script>

<style>

</style>