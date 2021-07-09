<template>
  <div id="detail">
      <DetailNavBar></DetailNavBar>
  </div>
</template>

<script>
import DetailNavBar from './childComponets/DetailNavBar.vue'

export default {
    data() {
        return {
            iid:null
        }
    },
    components:{
      DetailNavBar
    },
    created(){
        this.iid = this.$route.params.iid
    }
}
</script>

<style>

</style>