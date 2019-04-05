<template>
  <no-ssr>
    <div class='gridItemContainer'>
      <!-- {{item}} -->
      <div class='imageBox' :style='slideStyle(item.imageUrl)' />
      <Tooltip v-if='item.id' :text='item.id'/>
      <Tooltip v-if='item.title' :text='item.title'/>
      <!-- <div class='text' v-if='item.id'> {{item.id}} </div>
      <div class='text' v-if='item.title'> {{item.title}} </div> -->
    </div>
  </no-ssr>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
  components: {Tooltip},
  props: {
    item: {
      type: Object,
      default: ()=> ({})
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
</style>
