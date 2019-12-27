import {ButtonTest,ButtonTestTwo} from './packages/button-test/index.js';
import ButtonTestThree from './packages/button-test-three/index.js';

const components = [
    ButtonTest,
    ButtonTestTwo,
    ButtonTestThree,
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  ButtonTest,
  ButtonTestTwo,
  ButtonTestThree,
}
