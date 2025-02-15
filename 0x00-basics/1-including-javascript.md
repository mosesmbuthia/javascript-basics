## Introduction
Javascript is a programming language for the web that enables us to add functionality to our websites.
It is one of the important technologies of  the web, alongside HTML and CSS which are markup and styling languages respectively.

## Including Javascript
There are two ways of adding Javascript to HTML.
1. Internal Javascript
2. External Javascript

### Internal Javascript
This is where Javascript is written inside a `<script>` tag with the HTML file
###### Example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javasccript</title>
</head>
<body>
<h1>Javascript Testing</h1>
<script>
console.log (Hello World!)
    </script>
</body>
</html>
```



It is not a good practice to put Javascript in the head of the HTML document. 
The best practice is putting the `<script>` at the bottom of the `<body>` element which improves display speed since websites read the code line by line. The website loading will come to a complete stop to first read the `<script>` Javascript line and it could slow down the loading speed.

### External Javascript
Here, the javascript is stored in separate .js file and linked to the HTML using a `<script>` tag with a `<src>` attribute.
######
Example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <script src="./test.js"></script>
</head>
<body>
    <h1>Test Javascript</h1>
</body>
</html>
```
In the Javascript console, It will be;

```
console.log("Hello, word from external file");
console.log("External js is very fun")
```
### Optimizing script loading
Javascript can block a page from rendering if it is not loaded correctly. 
This is because websites parses the HTML code line by line and when it comes across a resourse that needs to be downloaded to the page e.g. an image or a video, it sends a requestto the server to dowmload the resourse.
However, when it comes across the `<script>` tag to download Javascript, it stops untill the Javascript is downloaded, it then executes the downloaded Javascript and then continues to parse the HTML. 
This can hurt the website loading speed.
To counter this and improve on performance, we use:

1. `defer` keyword
. This ensures that the scripts are loaded once the HTML is fully parsed. 

###### Example

```
<script src="./test.js" defer></script>
```
2. `async` keyword
. This loads the scripts asyncronously and runs them as soon as they are downloaded.
. Thiss may execute the Javascript out of order because smaller scripts will be downloaded first. 

###### Example

```
<script src="./test.js" async></script>
```
3. Adding the `<script>` tag at the end of the page before the closing `<body>` tag.

###### Example

```
 ....
  <script src="./test.js"></script>
</body>
</html>
```
Note: Always avoid using the `async` tag unless you are absolutely sure that if fits your needs, stick to the `defer` keyword or usin the `script` at the end of the HTML document brfore the closing `body` tag.



