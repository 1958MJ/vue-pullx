# vue-pullx

>vue下拉组件，适用于PC或移动端

## Build Setup

``` bash
# 安装
npm i vue-pullx

# 使用
...
<pullx @on-down-pull="onDown" @on-up-pull="onUp">
  ...
</pullx>
...
import pullx from 'vue-pullx'
...
components: {pullx}
...
methods: {
  onDown(over) {
    let noData = false
    ...do
    over(noData) // 是否有数据
  },
  onUp(over) {} // 同上
}

# 属性
是否没有数据就禁用
emptyStop Boolean(false)
是否首次加载
firstLoad Boolean(false)
是否开启滚动到底部加载
scrollLoad Boolean(false) 
没有数据提示语显示时间 毫秒
emptyDataCloseTime Number(2000)
文字配置
textConfig Object
{
  upDataText: '没有新的数据',
  downDataText: '没有更多数据了',
  upText: '下拉刷新...',
  downText: '上拉加载更多...',
  upLoadText: '刷新中...',
  downLoadText: '加载中...',
  upReleaseText: '释放刷新...',
  downReleaseText: '释放刷新...'
}

#Event
on-down-pull 下拉
on-up-pull 上拉

```

