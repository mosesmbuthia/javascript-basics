## Changing DOM Elements
We can change the contents, attributes, and styling of DOM elements.
### Changing the contents of HTML elements
`innerHTML`
This keyword sets or gets the HTML content of an element.
```html
<div id="my-div">
    <h1>Hello, world</h1>
    <p>JavaScript is awesome</p>
</div>
```

```js
const div = document.getElementById("my-div");
console.log(div.innerHTML);
div.innerHTML = `<h1>New content</h1>`;
console.log(div.innerHTML);
```
`innerText`
This keyword sets or gets the text content of an element not preserving the HTMl tags.
```html
<div id="my-div">
    <h1>Hello, world</h1>
    <p>JavaScript is awesome</p>
</div>
```

```js
const div = document.getElementById("my-div");
console.log(div.innerText);
div.innerText = "New content";
console.log(div.innerText);
```
`textContent`
This sets or gets the content of an element and its  descedants without preserving the HTML tags.

This is usually more consistent across browsers compared to `innerText`

### Changing the attribute of HTML elements
To change the attribute of a HTML element by using `element.attribute = value`
```html
<h1 class="title" id="title">Hello, world</h1>
```
```js
const title = document.getElementById("title");
console.log(title); // <h1 class="title" id="title">Hello, world</h1>
title.id = "awesome-title";
console.log(title); // <h1 class="title" id="awesome-title">Hello, world</h1>
```
We can also use `element.setAttribute("attribute", "value") 
```html
<h1 class="title" id="title">Hello, world</h1>
```
```js
const title = document.getElementById("title");
console.log(title); // <h1 class="title" id="title">Hello, world</h1>
title.setAttribute("id", "awesome-title");
console.log(title);
```
### Changing the styling of HTML elements
we can use `element.style.property = "value'` to change the styling of a HTML elements.

It is important to input the value in double quotes even if it is a number.
```js
const title = document.getElementById("title");
title.style.border = "3px solid red";
title.style.fontSize = "48px";
title.style.borderRadius = "5px";
```
**Changing styling in JavaScript using CSS classes**
- `element.classList>add()`:adds one or more class names to an element without removing the existing classes.
- `element.classList.remove()`: this removes one or more classes from an element.
- `element.classList.toggle()`: this toggles the specified class, if it is present, it is removed, if it is absent, it is added.
- `element.classList.contains()`: this returns true if an element contains the specified class(es), and returns false if otherwise.
- `element.classList.replace()`: this replaces an existing class with a new class.
- `element.style.setProperty()`: this sets a CSS property on an element (first parameter) and its value (second parameter)
