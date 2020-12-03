<template>
  <div class='gridItemContainer'>
    <!-- {{item}} -->
    <div v-if='fullsize' class='listImageItemContainer'>
      <a :href='item.imageUrl' target='_blank'>
        <img class='listImageItem' :src='item.imageUrl' />
        <p class='imageTitle'>{{item.imageUrl}}</p> 
      </a>
    </div>
    <div v-else>
      <div class='imageBox' v-if='item.imageUrl' :style='slideStyle(item.imageUrl)' />
      <Tooltip v-if='item.id' :text='item.id'/>
      <Tooltip v-if='item.title' :text='item.title'/>
    </div>
    <!-- <div class='text' v-if='item.id'> {{item.id}} </div>
    <div class='text' v-if='item.title'> {{item.title}} </div> -->
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
  components: {Tooltip},
  props: {
    item: {
      type: Object,
      default: ()=> ({})
    },
    fullsize: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    slideStyle: function(imageurl = ''){
      return {
        backgroundImage: `url('${imageurl}')`
      }
    },
  },
  data: function(){
    return {}
  },
}
</script>

<style scoped>
.gridItemContainer {
  padding: 10px 5px;
}
.imageBox {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
.listImageItemContainer{
}
.listImageItemContainer .imageTitle{
}
.listImageItem{
  height: 400px;
  width: auto;
}
</style>
