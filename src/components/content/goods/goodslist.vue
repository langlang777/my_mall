<template>
  <div class="goods">
      <GoodsListItem v-for="item in goods" :key="item.id" :goodsitem='item'></GoodsListItem>
  </div>
</template>

<script>

import GoodsListItem from 'components/content/goods/goodsitem'

export default {
  components: {
      GoodsListItem
  },
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  }

}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

</style>