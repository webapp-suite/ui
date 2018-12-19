字体是体系化界面设计中最基本的构成之一。

我们的用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。Earth UI 字体方案，是基于『动态秩序』的设计原则，在视觉体系中定义字体系统，我们建议从下面五个方面出发：

1. 字体家族
1. 主字体大小
1. 字阶与行高
1. 字重
1. 字体颜色

## 字体家族

优秀的字体系统首先是要选择合适的字体家族。Earth UI 的字体家族中优先使用 Google 委托 Steve Matteson 设计的无衬线字体 [Open Sans](https://zh.wikipedia.org/wiki/Open_Sans)，然后是系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。

```css
@ui-fontstack: 'Open Sans', 'Helvetica Neue', 'Lucida Grande', 'Segoe UI', 'Ubuntu', 'Droid Sans', sans-serif;
```

对于代码的显示，优先使用 Ubuntu 字体系列：

```css
@ui-fontstack-mono: 'Ubuntu Mono', 'Menlo', 'Monaco', 'Consolas', 'Bitstream Vera Sans Mono', monospace;
```

另外，数字经常需要进行纵向对比展示，我们单独将数字的字体 [font-variant-numeric](https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures) 设置为 `tabular-nums`，使其为等宽字体。

> 参考 https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage#comment78509178_32660790

## 主字体大小

基于电脑显示器阅读距离（50 cm）以及最佳阅读角度（0.3），我们将默认的 `@ui-fontsize` 由浏览器默认的的 `12px` 上升至 `14px`，以保证在多数常用显示器上的用户阅读效率最佳。

<div>
  <img src="/img/main_font-size.png" />
</div>

## 字阶与行高

字阶和行高决定着一套字体系统的动态与秩序之美。字阶是指一系列有规律的不同尺寸的字体。行高可以理解为一个包裹在字体外面的无形的盒子。

<div>
  <img src="/img/font-size_font-weight.png" />
</div>

Earth UI 定义了 8 个不同尺寸的字体变量以及与之相对应的行高。

|    字体变量    | 数值 | 行高 |
| ---------- | --- | --- |
| @ui-fontsize-small      |  11 |18 |
| @ui-fontsize-mini       |  12 |20 |
| @ui-fontsize            |  14 |22 |
| @ui-fontsize-medium     |  16 |24 |
| @ui-fontsize-big        |  18 |26 |
| @ui-fontsize-xbig       |  24 |32 |
| @ui-fontsize-xxbig      |  36 |48 |
| @ui-fontsize-icon       |  22 |30 |

在 Earth UI 的视觉体系中，我们建议的主要字体为 `14px`，与之对应的行高为 `22px`。其余的字阶的选择可根据具体情况进行自由的定义。建议在一个系统设计中（展示型页面除外），字阶的选择尽量控制在 `3-5` 种之间，保持克制的原则。

## 字重

字重的选择同样基于秩序、稳定、克制的原则。多数情况下，只出现 默认（即 `regular`） 以及 `medium` 的两种字体重量，分别对应代码中的 `400` 和 `500`。在英文字体加粗的情况下会采用 `semibold` 的字体重量，对应代码中的 `600`。

|    名称    | 数值 | 示例 | 场景 |
| ---------- | --- | --- | --- |
| @ui-fontweight-light        |  300 | <span style="font-weight: 300">字 Font</span> | 细 |
| @ui-fontweight              |  400 | <span style="font-weight: 400">字 Font</span> | 正常 |
| @ui-fontweight-medium       |  500 | <span style="font-weight: 500">字</span> | 中文加粗 |
| @ui-fontweight-semibold     |  600 | <span style="font-weight: 600">Font</span> | 英文加粗 |
| @ui-fontweight-bold         |  700 | <span style="font-weight: 700">字 Font</span> | 最粗 |

## 字体颜色

文本颜色如果和背景颜色太接近就会难以阅读。考虑到无障碍设计的需求，我们参考了 [WCAG](https://www.w3.org/Translations/WCAG20-zh/) (Web Content Accessibility Guidelines) 的标准，将正文文本、标题和背景色之间保持在了 `7:1` 以上的 `AAA` 级对比度。

<table class="font-color-table">
<thead>
<tr>
<th>颜色类型</th>
<th>白色背景</th>
<th class="backgorund-light">浅色背景</th>
<th class="backgorund-dark">深色背景</th>
</tr>
</thead>
<tbody>
<tr>
<td class="backgorund-white">Title</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#262626;"></span> black</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#262626;"></span> black</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#fff;"></span> white</td>
</tr>
<tr>
<td class="backgorund-white">Primary text</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#1f2a2e;"></span> slate</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#1f2a2e;"></span> slate</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#eff3f5;"></span> gray-lightest</td>
</tr>
<tr>
<td class="backgorund-white">Secondary text</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#3f555f;"></span> slate-lighter</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#3f555f;"></span> slate-lighter</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#cbd7dc;"></span> gray-light</td>
</tr>
<tr>
<td class="backgorund-white">Border</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#cbd7dc;"></span> gray-light</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#cbd7dc;"></span> gray-light</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#1f2a2e;"></span> slate</td>
</tr>
<tr>
<td class="backgorund-white">Dividers</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#cbd7dc;"></span> gray-light</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#cbd7dc;"></span> gray-light</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#1f2a2e;"></span> slate</td>
</tr>
<tr>
<td class="backgorund-white">Disable</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#e6ecef;"></span> gray-lighter</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#cbd7dc;"></span> gray-light</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#1f2a2e;"></span> slate</td>
</tr>
<tr>
<td class="backgorund-white">Background</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#e6ecef;"></span> gray-lighter</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#fff;"></span> white</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#1f2a2e;"></span> slate</td>
</tr>
<tr>
<td class="backgorund-white">Table header</td>
<td class="backgorund-white"><span class="color-palette" style="background-color:#eff3f5;"></span> gray-lightest</td>
<td class="backgorund-light"><span class="color-palette" style="background-color:#eff3f5;border:1px solid #cbd7dc"></span> gray-lightest</td>
<td class="backgorund-dark"><span class="color-palette" style="background-color:#3f555f;"></span> slate-lighter</td>
</tr>
</tbody>
</table>

<style>
table.font-color-table th {
  background-color: #fff;
}
.color-palette {
  position:relative;
  top:2px;
  display:inline-block;
  height:14px;
  width:14px;
  margin-right:5px;
  border-radius:50%;
}
.backgorund-light {
  background-color: #e7edee !important;
  border-top-color: #cbd7dc !important;
  border-bottom-color: #cbd7dc !important;
}
.backgorund-white {
  background-color: #fff !important;
}
.backgorund-dark {
  background-color: #2d3c43 !important;
  border-top-color: #1f2a2e !important;
  border-bottom-color: #1f2a2e !important;
  color: #fff;
}
</style>

## 建议

字体系统的构建，是『动态秩序之美』的第一步。在实际的设计中，我们还有三点建议：

1. **建立体系化的设计思路：**在同一个系统的 UI 设计中先建立体系化的设计思路，对主、次、辅助、标题、展示等类别的字体做统一的规划，再落地到具体场景中进行微调。建立体系化的设计思路有助于强化横向字体落地的一致性，提高字体应用的性价比，减少不必要的样式浪费。
1. **少即是多：**在视觉展现上能够用尽量少的样式去实现设计目的。避免毫无意义的使用大量字阶、颜色、字重强调视觉重点或对比关系。
1. **尝试让字体像音符一样跳跃：**在需要拉开差距的时候可以尝试在字阶表中跳跃的选择字体大小，会令字阶之间产生一种微妙的韵律感。
