<template>
  <div class='mainContainer'>
    <span class='row openB'>{</span>
    <div v-for='(item, index) in keyValList' :key='`${random()}`' :class='`row keyval ${item.type}`' @click='onClickHandler(item)'>
      <span class='key'>{{item.key}}</span> : <span :class='`value`'>{{item.value}}</span> , 
    </div>

    <div v-for='(objectItem, index) in objectChildren' :key='`${random()}`' class='row objectContainer'>
      <span class='key' @click='onClickHandler(objectItem)'>{{objectItem.key}}</span> : <TreeDataNode :treeObject='objectItem.value'/> ,
    </div>

    <div v-for='(arrayItem, index) in arrayChildren' :key='`${random()}`' class='row arrayContainer'>
      <span class='row openB'>[</span>
        <TreeDataNode :treeObject='arrayItem'/>
      <span class='row closeB'>]</span>
    </div>

    <span class='row closeB'>}</span>
  </div>
</template>

<script>
import TreeDataNode from './TreeDataNode'
import TreeData from '@/utils/TreeData'
export default {
  name: 'TreeDataNode',
  components: { TreeDataNode },
  props: {
    treeObject: {
      type: Object,
      default: null
    }
  },
  mounted: function () {
  },
  computed: {
    keyValList: function (){
      return this.treeObject && this.treeObject.keyValList || []
    },
    arrayChildren: function (){
      return this.treeObject && this.treeObject.arrayChildren || []
    },
    objectChildren: function (){
      return this.treeObject && this.treeObject.objectChildren || []
    }
  },
  data: function(){
    return {}
  },
  methods: {
    onClickHandler: function (item) {
      const {locate} = this.treeObject
      this.$store.commit('system/notificationMessage', `${locate}.${item.key}`)
    },
    random: function () {
      return `${Math.random( )}`
    }
  }
}
</script>

<style scoped>
.mainContainer {
  padding: 10px;
}
.row {
  display: block;
  line-height: 10px;
}
.keyval, .objectContainer, .arrayContainer{
  padding-left: 30px;
}
.value {
  font-weight: 800;
}
.string .value::before, .string .value::after{ 
  content: '"';
}
.string {
  color: brown;
}
.number {
  color: darkgreen;
}
.key:hover, .value:hover {
  background-color: lightgray;
  cursor: pointer;
}
</style>
