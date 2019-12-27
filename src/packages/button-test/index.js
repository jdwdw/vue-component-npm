// 引入组件
import ButtonTest from './button-test.vue'
import ButtonTestTwo from './button-test-two'

ButtonTest.install = Vue => Vue.component(ButtonTest.name, ButtonTest);
ButtonTestTwo.install = Vue => Vue.component(ButtonTestTwo.name, ButtonTestTwo);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ButtonTest);
  window.Vue.use(ButtonTestTwo);
}

export {ButtonTest,ButtonTestTwo}
