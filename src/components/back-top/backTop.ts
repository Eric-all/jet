import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import { scrollTop } from '../_util/util'
import template from './template/backTop.html'
import './style'

@Component({
  name: 'backTop',
  template: template
})
export default class backTop extends Vue {
  @Prop({ default: 400 }) visibilityHeight: number
  @Prop({ default: 1000 }) duration: number

  @Provide() backTop: boolean = false
  @Provide() isSlot = this.$slots.default !== undefined

  mounted () {
    window.addEventListener('scroll', this.handlerScroll, false)
    window.addEventListener('resize', this.handlerScroll, false)
  }
  beforeDestroy () {
    window.removeEventListener('scroll', this.handlerScroll, false)
    window.removeEventListener('resize', this.handlerScroll, false)
  }

  handlerScroll () {
    this.backTop = window.pageYOffset >= this.visibilityHeight
  }
  handlerBackTop () {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    scrollTop(window, top, 0, this.duration)
    this.$emit('onBack')
  }
}
