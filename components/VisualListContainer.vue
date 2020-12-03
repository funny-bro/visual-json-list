<template>
    <div class='itemListContainer'>
      <div v-if='itemList' v-for='(item, index) of itemList' :class='fullsize? "listBox" : "gridBox"'>
        <GridItem :key='index' :item='item' :fullsize='fullsize'/>
      </div>
      <div v-if='!itemList'>
        Incorrect data
      </div>
    </div>
</template>

<script>
import GridItem from './GridItem'
import MixinString from '~/mixins/string'
export default {
  components: {GridItem},
  mixins: [MixinString],
  props: {
    dataString: {
      type: String,
      default: ''
    },
    itemListLocate: {
      type: String,
      default: ''
    },
    itemImageUrl: {
      type: String,
      default: ''
    },
    itemTitle: {
      type: String,
      default: ''
    },
    fullsize: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemList: function(){
      try {
        const {data = {}, itemListLocate, itemImageUrl, itemTitle} = this
        const listLocate = this.retrieveObject(data, itemListLocate) || []

        if(!listLocate.map) return null

        return listLocate.map(item => {
          const imageUrl = itemImageUrl && this.retrieveObject(item, itemImageUrl)
          const title = itemTitle && this.retrieveObject(item, itemTitle)
          // const imageUrl = this.retrieveObject(item, itemImageUrl)
          return { imageUrl, title}
        })
      }
      catch(err){
        console.log('[ERROR] VisualListContainer, itemList', err)
        return ''
      }
    }
  },
  data: function(){
    const {dataString} = this
    return {
      data: this.safelyParseJson(dataString)
    }
  }
}
</script>

<style scoped>
.itemListContainer{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.gridBox {
  width:200px;
  /* border: black 1px solid; */
}
.listBox {
}
</style>
