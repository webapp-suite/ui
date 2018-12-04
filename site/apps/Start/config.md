## 组件全局配置

覆盖或扩展 `defaultProps` 即可，以 [Tooltip][tooltip-url] 为例:

```jsx
Tooltip.defaultProps = Object.assign(Tooltip.defaultProps || {}, {
  triggerMode: 'click'
})
```

命令式 API 模块：[notification][notification-url]、[xhr][xhr-url] 也支持全局配置，涉及 url 方式加载数据的组件以及 [Form][form-url] 均依赖 xhr，详细配置请参考其各自文档。

> 全局配置后，这些 API 会变成有状态的，即最终结果受配置影响，所以尽量一次性配置并向其它开发者说明。

[tooltip-url]: https://ui.muwenzi.com/components/Tooltip
[notification-url]: https://ui.muwenzi.com/components/notification
[xhr-url]: https://ui.muwenzi.com/components/xhr
[form-url]: https://ui.muwenzi.com/components/Form
