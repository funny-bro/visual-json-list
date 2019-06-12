export const state = () => ({
  isLoading: false,
  notificationMessage: ''
})

export const mutations = {
  setIsLoading(state, isOn = false) {
    state.isLoading = isOn
  },
  notificationMessage(state, message = '') {
    state.notificationMessage = message
  }
}
