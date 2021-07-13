<template>
  <div class="toast" v-show="isshow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            default(){
                return ''
            }
        },
        isshow:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
}
</script>

<style>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%,-50%) ;
    padding: 8px 10px;
    background-color: rgba(0,0,0,.7);
}
</style>