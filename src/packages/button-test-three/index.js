// 引入组件
import ButtonTestThree from './button-test-three'

ButtonTestThree.install = Vue => Vue.component(ButtonTestThree.name, ButtonTestThree);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ButtonTestThree);
}

export default ButtonTestThree