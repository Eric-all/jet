import './components/style'
import Rate from './components/rate'
import Icon from './components/icon'
import BackTop from './components/back-top'

const Eric = {
  Rate,
  Icon,
  BackTop
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
