<template>
    <swiper  class="box">
      <template v-slot:swiper>
        <SwiperItem v-for="item in topImages" :key="item">
          <img class="topimages" :src="item" alt="" />
        </SwiperItem>
      </template>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.topimages{
  width: 100%;
}
.box{
  height: 250px;
  overflow: hidden;
}
</style>