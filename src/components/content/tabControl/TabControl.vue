<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="item" 
    class="tabcontrolitem" :class="{active:index === currentindex}" @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
        return{
            currentindex:0
        }
    },
    methods:{
       itemclick(index){
            this.currentindex = index
            this.$emit('tabclick',index)
       }
    }
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tabcontrolitem {
  flex: 1;
}
.active {
    color: deeppink;
}

.active span {
    padding-bottom: 5px;
    border-bottom: 3px solid pink;
}
</style>