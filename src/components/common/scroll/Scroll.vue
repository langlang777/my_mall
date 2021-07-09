<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
// import BScroll from '@better-scroll/core'

// import Pullup from '@better-scroll/pull-up'
import BScroll from 'better-scroll'
// BScroll.use(Pullup)
export default {
    data(){
        return {
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default(){
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    // 生命周期函数 当组件挂着时调用
    // this.$refs.wrapper 获取绑定 ref 的 元素 如果绑定在组件上 就是组件对象
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM:true,
            observeImage:true,
            click:true,
            probeType:this.probeType,
            pullUpLoad: this.pullUpLoad,
        })

        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })

        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    }
}
</script>

<style>

</style>