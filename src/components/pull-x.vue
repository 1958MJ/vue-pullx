<template>
  <div ref="pullx">
    <slot></slot>
  </div>
</template>
<script type="text/javascript">
  import PullLoad from '../assets/pull-load'
  export default {
    name: 'vue-pullx',
    props: {
      scrollLoad: {
        type: Boolean,
        default: false
      },
      firstLoad: {
        type: Boolean,
        default: false
      },
      emptyStop: {
        type: Boolean,
        default: false
      },
      disableUp: {
        type: Boolean,
        default: false
      },
      disableDown: {
        type: Boolean,
        default: false
      },
      emptyDataCloseTime: {
        type: Number,
        default: 2000
      },
      textConfig: {
        type: Object,
        default: () => {
          return {
            upDataText: '没有新的数据',
            downDataText: '没有更多数据了',
            upText: '下拉刷新...',
            downText: '上拉加载更多...',
            upLoadText: '刷新中...',
            downLoadText: '加载中...',
            upReleaseText: '释放刷新...',
            downReleaseText: '释放刷新...'
          }
        }
      }
    },
    mounted () {
      this.pullx = new PullLoad({
        emptyStop: this.emptyStop,
        container: this.$refs.pullx,
        textConfig: this.textConfig,
        emptyDataCloseTime: this.emptyDataCloseTime,
        down: {
          enable: !this.disableDown,
          callback: (over) => {
            this.$emit('on-down-pull', over)
          }
        },
        up: {
          isScrollLoad: this.scrollLoad,
          isInitLoad: this.firstLoad,
          enable: !this.disableUp,
          callback: (over) => {
            this.$emit('on-up-pull', over)
          }
        }
      })
    }
  }
</script>
