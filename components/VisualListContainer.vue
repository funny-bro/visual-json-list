<template>
    <div class='itemListContainer'>
      <div v-if='itemList' v-for='(item, index) of itemList' class='itemBox'>
        <GridItem :key='index' :item='item'/>
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
  },
  computed: {
    itemList: function(){
      try {
        const {data = {}, itemListLocate, itemImageUrl, itemTitle} = this
        console.log('itemListLocate: ', itemListLocate)
        console.log('itemImageUrl: ', itemImageUrl)
        const listLocate = this.retrieveObject(data, itemListLocate)

        return listLocate.map(item => {
          const imageUrl = this.retrieveObject(item, itemImageUrl)
          const title = this.retrieveObject(item, itemTitle)
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
.itemBox {
  width:200px;
  /* border: black 1px solid; */
}
</style>
