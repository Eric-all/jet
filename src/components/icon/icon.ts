import { Component, Vue, Prop } from 'vue-property-decorator'
import template from './template/icon.html'

@Component({
  name: 'icon',
  template: template
})
export default class Icon extends Vue {
  @Prop({ required: true }) name: string
  @Prop() spin: boolean

  get _class () {
    return {
      'anticon': true,
      [`anticon-${this.name}`]: this.name,
      'anticon-spin': this.spin
    }
  }
}
