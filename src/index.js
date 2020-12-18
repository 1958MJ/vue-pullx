import pullx from './components/pull-x'
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-pullx', pullx)
}
pullx.install = function(Vue){
  Vue.component('vue-pullx', pullx)
}
export default pullx
