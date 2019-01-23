## 组件全局配置

覆盖或扩展 `defaultProps` 即可，以 [Tooltip][tooltip-url] 为例:

```jsx
Tooltip.defaultProps = Object.assign(Tooltip.defaultProps || {}, {
  triggerMode: 'click'
})
```

> 全局配置后，这些 API 会变成有状态的，即最终结果受配置影响，所以尽量一次性配置并向其它开发者说明。

[tooltip-url]: https://ui.muwenzi.com/components/Tooltip
