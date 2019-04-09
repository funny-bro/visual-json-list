<template>
  <div class="tooltip" v-if='text'>
    {{shortText}}
    <span class="tooltiptext"> {{text}} </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    shortText: function(){
      const {text} = this

      if(!text || !text.slice) return ''

      if(text.length <=10) return text

      return text.slice(0,9)
    }
  },
  methods: {
  },
  data: function(){
    return {}
  },
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  border: 1px #4c4c4c solid;
  width: 300px;
  background-color: white;
  color: #4c4c4c;
  text-align: center;
  border-radius: 2px;
  padding: 20px 10px;
  position: absolute;
  line-height: 1.5;
  font-size: 14px;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
