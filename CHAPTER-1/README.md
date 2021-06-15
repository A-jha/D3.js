## [Using images](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)

Importing images into a canvas is basically a two step process:

1. Get a reference to an HTMLImageElement object or to another canvas element as a source. It is also possible to use images by providing a URL.
2. Draw the image on the canvas using the drawImage() function.

### Creating an image from scratch

Create new HTMLImageElement objects in our script. To do this, you can use the convenient Image() constructor.

```javascript
var img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

If you try to call drawImage() before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to be sure to use the load event so you don't try this before the image has loaded.

```javascript
image1.addEventListener("load", () => {
  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
});
```

- drwimage() function can be called in 3 ways
  1. if we pass image and starting points
  2. if we pass image and starting points and size of image (h/w)
  3.

### Information about canvas Image

- Uint8ClampedArray(1440000)
  - this an special array contains integer value between 0 and 255 of RGBA Values.
  - It somehow represents color values
  - in this array each pixels is spread into 4 numbers as R, G, B, A(0 - 255)
- claculate the pixel of an image of size 800 px X 450 px

```javascript
> 800 *  450
>360000
//and
>  800 * 450 * 4
> 1440000 //this is the value of Uint8ClampedArray
```
