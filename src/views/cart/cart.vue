<template>
 <NavBar>
      <template v-slot:center> 购物车（{{carlength}}） </template>
 </NavBar>
 <CarList class="carlist"></CarList>
 <BottomBar class="bottombar"></BottomBar>

</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from 'common/navbar/NavBar.vue'
import CarList from './childComps/carlist.vue'
import BottomBar from './childComps/BottomBar.vue'


export default {
  components:{
    NavBar,
    CarList,
    BottomBar
  },
  computed:{
    ...mapGetters([
      'carlength'
    ])
  }
}
</script>

<style scoped>

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: fixed;
    z-index: 9;
    top: 0;
    width: 100%;
  }
  .carlist {
    position: relative;
    top: 44px;
  }


</style>