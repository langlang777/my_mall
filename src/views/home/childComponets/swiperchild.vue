<template>
  <Swiper>
      <template v-slot:swiper>
       <!-- 当在组件上使用 v-for 时，key 现在是必须的 建议使用唯一值做key -->
        <SwiperItem v-for="item in banner" :key="item.title">
          <a :href="item.link">
            <img class="swiperimg" :src="item.image" alt="" />
          </a>
        </SwiperItem>
      </template>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
    components:{
        Swiper,
        SwiperItem
    },
    // 接受父组件的 banner
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.swiperimg {
  width: 100%;
}
</style>