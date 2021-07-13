<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" :value = 'isselectall' @click="checkclick"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥ {{totalPrice}}</span>
    <span class="buy-product">去计算({{checkedlength}})</span>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  export default {
    computed: {
      totalPrice(){
        return  this.$store.state.carlist.filter(item =>{
          return item.checked
        }).reduce((prevalue,item)=>{
          return prevalue + item.price.match(/\d+\.\d+/g) * item.count
        },0)
      } ,
      checkedlength(){
        return this.$store.state.carlist.filter(item => item.checked).reduce((prevalue,item)=>{
          return prevalue + item.count
        },0)
      },
      isselectall(){
        if (this.$store.state.carlist.length === 0 ) return false
        return this.$store.state.carlist.filter(item => !item.checked).length == 0
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkclick(){
        if (this.isselectall){
          this.$store.commit('noselectall')
        }else{
          this.$store.commit('selectall')

        }
      }
    },

  };
</script>


<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
