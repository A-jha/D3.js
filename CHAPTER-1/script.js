//select canvas
const canvas = document.getElementById("canvas1");

//contex
/*
Returns an object that provides methods and properties
for drawing and manipulating images and graphics on a
canvas element in a document. A context object includes 
information about colors, line widths, fonts, and other
graphic parameters that can be drawn on a canvas.
*/
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 450;

//this wii create an image tag
const image1 = new Image();

image1.src = "../images/img1.jpg";

image1.addEventListener("load", () => {
  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  const sccanedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
});
