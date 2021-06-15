# Canvas API

The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas\> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

The Canvas API largely focuses on 2D graphics. The WebGL API, which also uses the <canvas\> element, draws hardware-accelerated 2D and 3D graphics.

## The <canvas\> element

- At first sight a <canvas\> looks like the <img\> element, with the only clear difference being that it doesn't have the src and alt attributes.
- the <canvas\> element has only two attributes, width and height.

- By default it has width = 300px and Height = 150px
- The canvas element can be styled as an normal image styling pattern.

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

## Fallback content

The <canvas\> element differs from an <img\> tag in that, like for <video\>, <audio\>, or <picture\> elements, it is easy to define some fallback content, to be displayed in older browsers not supporting it.

- Providing fallback content is very straightforward: just insert the alternate content inside the <canvas\> element.

```html
<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="" />
</canvas>
```

## Required `</canvas>` tag

- the <canvas\> element requires the closing tag `</canvas>` .

- If this tag is not present, the rest of the document would be considered the fallback content and wouldn't be displayed.

## The rendering context

- The canvas is initially blank. To display something, a script first needs to access the rendering context and draw on it.

- The <canvas\> element has a method called getContext(), used to obtain the rendering context and its drawing functions.
- getContext() takes one parameter, the type of context.
- For 2D graphics, such as those covered by this tutorial, you specify "2d" to get a CanvasRenderingContext2D.

```javascript
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
```

## A sample

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script type="application/javascript">
      function draw() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200, 0, 0)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 50, 50);
        }
      }
    </script>
  </head>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

Output:

![output](./images/canvas_ex1.png)

### Now we are in good shape to move forward and learn more :).
