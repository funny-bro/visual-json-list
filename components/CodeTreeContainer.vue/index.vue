<template>
  <div class='codeTreeContainerWrapper'>
    <pre class="" v-if='dataString'>
      <TreeDataNode :treeObject='dataTree'/>
    </pre>
  </div>
</template>

<script>
import TreeDataNode from './TreeDataNode'
import TreeData from '@/utils/TreeData'
export default {
  components: { TreeDataNode },
  props: {
    dataString: {
      type: String,
      default: ''
    }
  },
  data: function(){
    try {
      const json = JSON.parse(this.dataString)
      const dataTree = new TreeData(json)
      return {dataTree}
    }
    catch(err) {
      return {dataTree: null}
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.codeTreeContainerWrapper {
  border: 1px solid gray;
  border-radius: 2px;
}
</style>
