<template>
  <div id="detail">
      <DetailNavBar class="topbar"></DetailNavBar>
      <Detailswiper :topImages='topImages'></Detailswiper>
      <DetailBaseInfo :goods='goods'></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
     
      <DetailGoodsInfo :detailInfo='detailInfo'  ></DetailGoodsInfo>
  </div>
</template>

<script>
import DetailNavBar from './childComponets/DetailNavBar.vue'
import Detailswiper from './childComponets/Detailswiper.vue'
import DetailBaseInfo from './childComponets/DetailBaseInfo.vue'
import DetailShopInfo from './childComponets/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponets/DetailGoodsInfo.vue'


import {getDetail,Goodsinfo,Shop} from 'network/detail.js'

export default {
    name:'Detail',
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
        }
    },
    components:{
      DetailNavBar,
      Detailswiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo
    },
    methods: {
      imgload(){
        this.isshow = true
      }
    },
    created(){
        this.iid = this.$route.params.iid

        getDetail(this.iid).then(res =>{
            const data = res.data.result
            console.log(res);
            this.topImages = data.itemInfo.topImages
            this.goods = new Goodsinfo(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
            this.detailInfo = data.detailInfo
        })
    }
}
</script>

<style scoped>
.topbar{
  position: fixed;
  z-index: 9;
  background-color: #fff;
  width: 100%;
}
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
}

</style>