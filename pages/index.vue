<template>
  <div>
    <head-component />
    <section class="container">
      <RequestConfigForm
        :url='url'
        :headers='headers'
        :itemListLocate='itemListLocate'
        :itemImageUrl='itemImageUrl'
        :itemTitle='itemTitle'
      />
    </section>

    <hr> 

    <section class="container jsonData" v-if='itemListLocate'>
      <h2> API Response </h2>
      <VisualListContainer
        :dataString='responseData'
        :itemListLocate='itemListLocate'
        :itemImageUrl='itemImageUrl'
        :itemTitle='itemTitle'
      />
    </section>

    <hr> 

    <section class="container jsonData">
      <h2> API Response </h2>
      <CodeContainer :dataString='responseData'/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import HeadComponent from '@/components/Header.vue'
import CodeContainer from '@/components/CodeContainer.vue'
import VisualListContainer from '@/components/VisualListContainer.vue'
import RequestConfigForm from '@/components/RequestConfigForm.vue'

const saflyStringify = (data) => {
  try{
    return JSON.stringify(data, null, 4)
  }
  catch(err) {
    console.log('[ERROR] saflyStringify: ', data)
    return ''
  }
}

const saflyParse = (dataString) => {
  try{
    return JSON.parse(dataString, null, 4)
  }
  catch(err) {
    console.log('[ERROR] saflyParse: ', dataString)
    return {}
  }
}

export default {
  components: {HeadComponent, CodeContainer, VisualListContainer, RequestConfigForm},
  mounted: function(){
    if (!this.$isServer && this.responseData) {
      setTimeout(()=> scrollTo(0,400), 200)
    }
  },
  async asyncData ({ query }) {
    console.log(' -=-=-= index.vue.asyncData')
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
hr{
  margin-top: 70px;
  border: 1px solid #e7e7e7;
}
section {
  max-width: 600px;
  margin: auto;
}
section pre {
  background: white;
  overflow: scroll;
  width: 100%;
  max-width: 800px;
}
.container {
}
.jsonData {
  margin-top: 60px;
}
.jsonData h2 {
  color: #4c4c4c;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
