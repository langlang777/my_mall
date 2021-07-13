<template>
  <div id="detail">
      <DetailNavBar class="topbar"></DetailNavBar>
      <Detailswiper :topImages='topImages'></Detailswiper>
      <DetailBaseInfo :goods='goods'></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo='detailInfo'  ></DetailGoodsInfo>
      <DetailParamInfo :paramInfo='GoodsParam'></DetailParamInfo>
      <DetailCommentInfo :commentInfo='commentInfo'></DetailCommentInfo>
      <GoodsList :goods='recommends'></GoodsList>
      <DetailBottomBar @addcart='addToCart'></DetailBottomBar>
      <toast message='message' :isshow='isshow'></toast>
      
  </div>
</template>

<script>
import DetailNavBar from './childComponets/DetailNavBar.vue'
import Detailswiper from './childComponets/Detailswiper.vue'
import DetailBaseInfo from './childComponets/DetailBaseInfo.vue'
import DetailShopInfo from './childComponets/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponets/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponets/DetailParamInfo.vue'
import DetailCommentInfo from './childComponets/DetailCommentInfo.vue'
import DetailBottomBar from './childComponets/DetailBottomBar.vue'

import GoodsList from "components/content/goods/goodslist";

import toast from 'components/common/toast/toast.vue'

import {getDetail,Goodsinfo,Shop,GoodsParam,getRecommend} from 'network/detail.js'

export default {
    name:'Detail',
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            GoodsParam:{},
            commentInfo:{},
            recommends:[],
            isshow:false,
            message:''
        }
    },
    components:{
      DetailNavBar,
      Detailswiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      toast
    },
    methods: {
      imgload(){
        this.isshow = true
      },
      addToCart(){
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.newPrice
        product.iid = this.iid

        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res =>{
          this.isshow = true;
          this.message= res;

          setTimeout(() => {
            this.message = ''
            this.isshow = false
          },1000)
        })

      }
    },
    created(){
        this.iid = this.$route.params.iid

        getDetail(this.iid).then(res =>{
            const data = res.data.result
            // console.log(res);
            this.topImages = data.itemInfo.topImages
            this.goods = new Goodsinfo(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
            this.detailInfo = data.detailInfo
            this.GoodsParam =new GoodsParam(data.itemParams.info,data.itemParams.rule)
            if(data.rate.cRate !== 0){
              this.commentInfo = data.rate.list[0]
            }
        })
        getRecommend().then(res=>{
          this.recommends = res.data.data.list
          console.log(this.recommends);
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