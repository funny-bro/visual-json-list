<template>
  <no-ssr>
    <pre class="prettyprint">
      {{dataString}}
    </pre>
  </no-ssr>
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
