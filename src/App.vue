<template>
  <pullx ref="pullx" id="app"
         @on-up-pull="onUp"
         @on-down-pull="onDown"
         :scrollLoad="true"
         :emptyDataCloseTime="1000"
         :emptyStop="false"
         :textConfig="{
          downText: 'xxx'
         }">
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </pullx>
</template>

<script>
import pullx from '../src/components/pull-x'
export default {
  components: {pullx},
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    this.$refs.pullx.pullx.down.enable = false
  },
  methods: {
    onUp (over) {
      console.log('up')
      setTimeout(function () {
        let noMoreData = true
        //请求接口，如果没有返回数据  noMoreData = ture
        over(noMoreData);
      }, 1500);
    },
    onDown (over) {
      console.log('down')
      setTimeout(function () {
        over(true)
      }, 1500)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100px;
  overflow: auto;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
