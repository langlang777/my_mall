<template>
  <div class="carlist">
     <CartListItem v-for="item in carlist" :key="item.iid" :item-info="item"></CartListItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
    computed:{
        ...mapGetters(['carlist'])
    },
    components:{
        CartListItem
    }
}
</script>

<style  scoped>
.carlist{
    width: 100%;
}
</style>