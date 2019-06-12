<template>
  <div class='toastContainer' v-if='innerMessage'>
    <div class='message'> {{innerMessage}} </div>
  </div>
</template>

<script>
export default {
  name: 'ToastComponent',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
  },
  watch: {
    message: function (){
      clearTimeout(this.timer)
      this.innerMessage = this.message
      this.timer = setTimeout(() => {
        return this.reset()
      }, 3000);
    }
  },
  data: function () {
    return {
        innerMessage: '',
        timer: null
      }
  },
  methods: {
    reset: function () {
      this.$store.commit('system/notificationMessage', '')
    }
  }
}
</script>

<style scoped>
.toastContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: gray;
  min-height: 50px;
  text-align: center;
  opacity: 0.9;
  padding: 20px;
}
.message {
  font-size: 18px;
  font-weight: 600;
}
</style>
