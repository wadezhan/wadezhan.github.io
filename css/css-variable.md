# CSS 自定义属性（变量）

自定义属性（有时候也被称作CSS 变量或者级联变量）是由 CSS 作者定义的，它包含的值可以在整个文档中重复使用。由自定义属性标记设定值（比如： --main-color: black;），由 var() 函数来获取值（比如： color: var(--main-color);）复杂的网站都会有大量的 CSS 代码，通常也会有许多重复的值。举个例子，同样一个颜色值可能在成千上百个地方被使用到，如果这个值发生了变化，需要全局搜索并且一个一个替换（很麻烦哎～）。自定义属性在某个地方存储一个值，然后在其他许多地方引用它。另一个好处是语义化的标识。比如，--main-text-color 会比 #00ff00 更易理解，尤其是这个颜色值在其他上下文中也被使用到。自定义属性受级联的约束，并从其父级继承其值。

## 声明变量

声明一个自定义属性，属性名需要以两个减号（--）开始，属性值则可以是任何有效的 CSS 值。和其他属性一样，自定义属性也是写在规则集之内的

```css
element {
  --main-bg-color: brown;
}
```

通常的最佳实践是定义在根伪类 :root 下，这样就可以在 HTML 文档的任何地方访问到它了

```css
:root {
  --main-bg-color: brown;
}
```

## 使用变量

用一个局部变量时用 var() 函数包裹以表示一个合法的属性值：

```css
element {
  background-color: var(--main-bg-color);
}
```

## 推荐阅读

- [MDN: 使用 CSS 自定义属性（变量）](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)