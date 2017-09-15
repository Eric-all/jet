import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import { getOffsetLeft } from '../_util/util'
import Star from './star'
import template from './template/rate.html'
import './style'

@Component({
  name: 'rate',
  template: template,
  components: {
    Star
  }
})

export default class Rate extends Vue {
  // props
  @Prop({default: 5}) count: number
  @Prop({default: 0}) value: number
  @Prop() disabled: boolean
  @Prop() allowHalf: boolean
  @Prop({default: 'star'}) icon: string

  // data
  @Provide() hoverValue: null | number = null
  @Provide() defaultValue: undefined | number = this.value

  // methods
  handlerClick (event?: any, index?: number) {
    this.defaultValue = this.getStarValue(index, event.pageX)
    this.handlerMouseLeave()
    this.$emit('onChange', this.defaultValue)
  }

  handlerMouseLeave (event?: any, index?: number) {
    if (this.disabled) return false
    this.hoverValue = null
  }

  handlerHover (event?: any, index?: number) {
    this.hoverValue = this.getStarValue(index, event.pageX)
  }

  getStarValue (index: any, event: any) {
    let value = index + 1
    if (this.allowHalf) {
      let el: any = this.$refs.rate
      const leftEdge = el.offsetLeft
      const width = getOffsetLeft(this.getStarDOM(1)) - leftEdge
      if ((event - leftEdge - width * index) < width / 2) {
        value -= 0.5
      }
    }
    return value
  }

  getStarDOM (index: number) {
    let el: any = this.$refs.rate
    return el.children[index]
  }

  // computed
  get _class () {
    return {
      'ant-rate': true,
      'ant-rate-disabled': this.disabled
    }
  }
}
