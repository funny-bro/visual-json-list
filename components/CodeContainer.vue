<template>
  <pre class="prettyprint" v-if='dataString'>
    {{dataString}}
  </pre>
</template>

<script>
export default {
  components: {},
  props: {
    dataString: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
