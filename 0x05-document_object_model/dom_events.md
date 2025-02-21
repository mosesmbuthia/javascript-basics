## DOM Events
An event in the DOM is an action or occurrence that happens in the browser which the browser can respond to.

Events are triggered by user interactions such as clicks, key presses or mouse movements.

### Some popular DOM evemts
`onclick`
This is triggered when an element is clicked.
```
const btn = document.getElementById("btn");
btn.onclick = function () {
  console.log("Button Clicked");
};
```
`onmouseover`
This is triggered when the mouse pointer moves over an element.

`onmouseout`
This is triggered when the mouse pointer moves out of an element.

`onkeydown`
This is triggered when a key is pressed down. Usually called on the document, i.e.,`document.onkeydown = function() {}`

`onkeyup`
This is triggered when a key is released. Usually called on the document, i.e., `document.onkeyup = function() {}`

`onload`
Triggered when the entire page has finished loading

`onfocus`
This is triggered when an element gains focus.
