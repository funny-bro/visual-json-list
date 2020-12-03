<template>
  <VisualListContainer
    :dataString='responseData'
    :itemListLocate='itemListLocate'
    :itemImageUrl='itemImageUrl'
    :itemTitle='itemTitle'
    :fullsize='fullsize'
  />
</template>

<script>
import axios from 'axios'
import VisualListContainer from '@/components/VisualListContainer.vue'

const saflyStringify = (data) => {
  try{
    return JSON.stringify(data, null, 4)
  }
  catch(err) {
    console.log('[ERROR] saflyStringify itemlist.vue: ', err)
    console.log('[ERROR] saflyStringify itemlist.vue: ', data)
    return ''
  }
}

const saflyParse = (dataString) => {
  try{
    if(typeof dataString === 'object') return dataString

    if(!dataString) return null

    return JSON.parse(dataString, null, 4)
  }
  catch(err) {
    console.log('[ERROR] saflyParse  itemlist.vue: ', err)
    console.log('[ERROR] saflyParse  itemlist.vue: ', dataString)
    return {}
  }
}

export default {
  name:'PageItemList',
  components: {VisualListContainer},
  mounted: function(){
  },
  computed: {
    fullsize: function() {
      const fullsize = (this.$route.query.fullsize) ? true : false
      return fullsize
    }
  },
  async asyncData ({ query }) {
    const {url = '', headers = '', itemListLocate = '', itemImageUrl= '', itemTitle = ''} = query

    if (process.server) {
      try {
        const res = await axios({
            url,
            method: 'get',
            headers: saflyParse(headers)
          })
        const {data} = res

        return {
          url: url || '',
          itemListLocate: itemListLocate || '',
          headers: headers || '',
          itemImageUrl: itemImageUrl || '',
          itemTitle: itemTitle || '',
          responseData: saflyStringify(data) || ''
        }
      }
      catch(error){
        console.log(error)
        console.log('[ERROR] asyncdata')
        return {
            url: '',
            responseData: '',
            itemListLocate: '',
            headers: '',
            itemImageUrl: '',
            itemTitle: '',
            status: error && error.response && error.response.status || 'unknow',
            errorMsg: error && error.response && error.response.data || 'unknow',
          }
      }
    }
  },
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
<style scoped>
</style>
