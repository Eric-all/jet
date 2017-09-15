import { Component, Vue, Prop } from 'vue-property-decorator'
import template from './template/star.html'
import './style'

@Component({
  template: template
})
export default class Star extends Vue {
  // props
  @Prop() value: number
  @Prop() index: number
  @Prop() allowHalf: boolean
  @Prop() disabled: boolean
  @Prop() icon: string
  @Prop([Function]) onChange: any
  @Prop([Function]) onHoverChange: any

  // methods
  handlerClick (event?: any) {
    if (this.disabled) return false
    this.onChange(event, this.index)
  }
  handleMouseMove (event?: any) {
    if (this.disabled) return false
    this.onHoverChange(event, this.index)
  }

  // computed
  get _class () {
    const starValue = this.index + 1
    if (this.allowHalf && this.value + 0.5 === starValue) {
      return 'ant-rate-star-half ant-rate-star-active'
    }
    return starValue <= this.value ? 'ant-rate-star-full' : 'ant-rate-star-zero'
  }
}
