Font is one of the most basic foundational part of a interface design system.

Text is the major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency. The typography system of WebApps UI is based on the design principle of `dynamic order`. While defining the font system for a visual system, we propose to start from the following five aspects:

1. Font Family
2. Base Font Size
3. Font Scale & Line Height
4. Font Weight
5. Font Color

## Font Family

In order to implement a good font system, the first thing is to choose an appropriate font family. WebApps UI prefers the *[Open Sans](https://fonts.google.com/specimen/Open+Sans)* font which is a humanist sans-serif typeface designed by Steve Matteson and commissioned by Google. Then it uses the system default font family and also provides a set of alternative font libraries to maintain readability for screens on different platforms and browsers and to make sure it's always user friendly, stable and professional to end user.

```css
@ui-fontstack: 'Open Sans', 'Helvetica Neue', 'Lucida Grande', 'Segoe UI', 'Ubuntu', 'Droid Sans', sans-serif;
```

For code display, use the `Ubuntu Mono` font first:

```css
@ui-fontstack-mono: 'Ubuntu Mono', 'Menlo', 'Monaco', 'Consolas', 'Bitstream Vera Sans Mono', monospace;
```

In addition, in a lot of applications, numbers often need to be displayed vertically. We set the CSS property `font-variant-numeric` to `tabular-nums;` to use [tabular figures](https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures).

> References: https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage#comment78509178_32660790

## Base Font Size

We have updated the base font size from the default size of browser `12px` to `14px` to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3).

<div align="center">
  <img width="600" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/dDpCbv.jpg'/>
</div>

## Font Scale & Line Height

The font scale and line height determine the beauty of the dynamics and order of a font system. Font scale refers to a series of font with different sizes. Line height can be understood as an invisible box wrapped outside the font.

<div align="center">
  <img width="600" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/PAnlsN.jpg'/>
</div>

WebApps UI has defined 8 different font sizes and corresponding line heights.

|    Variables    | Font Size | Line Height |
| ---------- | --- | --- |
| @ui-fontsize-small      |  11 |18 |
| @ui-fontsize-mini       |  12 |20 |
| @ui-fontsize            |  14 |22 |
| @ui-fontsize-medium     |  16 |30 |
| @ui-fontsize-big        |  18 |36 |
| @ui-fontsize-xbig       |  24 |42 |
| @ui-fontsize-xxbig      |  36 |48 |
| @ui-fontsize-icon       |  22 |30 |

In the visual system of WebApps UI, our recommended base font size is `14px`, and its corresponding line height is `22px`. The choice of the rest of the font scale can be freely defined according to the specific circumstances. It is recommended that in a design system (except for display pages), the choice of font scale should be controlled within 3 to 5 types, and the principle of restraint should be maintained.

## Font Weight

The choice of font weight is also based on the principles of order, stability, and restraint. In most cases, just `regular(400)` and `medium(500)` should be enough. In the case of bold English words, `semibold(600)` could be used.

|    Variables    | Font Weight | Example | Scenarios |
| ---------- | --- | --- | --- |
| @ui-fontweight-light        |  300 | <span style="font-weight: 300">字 Font</span> | light |
| @ui-fontweight              |  400 | <span style="font-weight: 400">字 Font</span> | regular |
| @ui-fontweight-medium       |  500 | <span style="font-weight: 500">字 Font</span> | medium |
| @ui-fontweight-semibold     |  600 | <span style="font-weight: 600">字 Font</span> | semibold |
| @ui-fontweight-bold         |  700 | <span style="font-weight: 700">字 Font</span> | bold |

## Font Color

Text will be difficult to read if it is too close to the background color. To achieve barrier-free design, we follow the [WCAG](https://www.w3.org/TR/WCAG20/) (Web Content Accessibility Guidelines) standard, which maintains an `AAA` level of contrast ratio, i.e. `7:1` or more between body text, title, and background color.

<table class="font-color-table">
<thead>
<tr>
<th>Type</th>
<th>White Background</th>
<th class="backgorund-light">Light Background</th>
<th class="backgorund-dark">Dark Background</th>
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

## Advanced Tips

The construction of the font system is the first step to achieve "the beauty of dynamic order". In practical design, we have three more advanced tips：

1. **Establish a systematic design thinking**: In the UI design of the same system, a systematic design thinking should be first established. The primary, secondary, auxiliary, title, display, and other types of fonts are planned in a unified manner. And then make any necessary fine tuning according to the specific situation. The establishment of a systematic design approach helps to increase the consistency of horizontal font landing, improve the cost-effectiveness of font uses, and avoid unnecessary style waste.
2. **Less is more**：Visual design should be achieved with as few styles as possible. Avoid meaningless use of large numbers of font scales, colors, and font weight to emphasize visual or contrast relationships.
3. **Try to make font scale dance like a note**: When you need to expand any gap, you can try to choose the size of the font to jump in the font scale table, which will create a subtle rhythm between the word scales.
