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

    <section class="container jsonData">
      <h2> Gride Items 
        <a :href='getGrideItemsUrl()' target='blank' class='openButton'> open </a>
        <a :href='`${getGrideItemsUrl()}&fullsize=true`' target='blank' class='openButton'> open： fullsize </a>
      </h2>
      <iframe v-if="responseData" id="exframe" :src="getGrideItemsUrl()" />
    </section>

    <hr> 

    <section class="jsonData">
      <h2> API Response </h2>
      <!-- <CodeContainer :dataString='responseData'/> -->
      <CodeTreeContainer :dataString='responseData'/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
import HeadComponent from '@/components/Header.vue'
import CodeContainer from '@/components/CodeContainer.vue'
import CodeTreeContainer from '@/components/CodeTreeContainer.vue'
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
    console.log('[ERROR] saflyParse index.vue: ', err)
    console.log('[ERROR] saflyParse index.vue: ', dataString)
    return {}
  }
}

export default {
  name: 'PageHome',
  components: {HeadComponent, CodeContainer, CodeTreeContainer, VisualListContainer, RequestConfigForm},
  mounted: function(){
    if (!this.$isServer && this.responseData) {
      setTimeout(()=> scrollTo(0,400), 200)
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
          responseData: saflyStringify(data) || '',
          query
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
  methods: {
    getGrideItemsUrl: function () {
      const {query} = this
      return `/itemlist?${queryString.stringify(query)}`
    }
  }
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
.openButton {
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 300;
  border: gray solid 1px;
  line-height: 30px;
  margin-left: 10px;
}

#exframe {
  width: 100%;
  border: none;
  min-height: 800px;
}
</style>
