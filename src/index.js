import Rate from './components/rate'

const Eric = {
  Rate
}

const install = (Vue, option = {}) => {
  Object.keys(Eric).forEach((key) => {
    Vue.component(key, Eric[key])
  })
  // Vue.prototype.$message = Message
  // Vue.prototype.$notice = Notice
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(Eric, {install})
