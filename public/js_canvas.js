const canvasBg = document.querySelector(".glslCanvas");
const canvasContainer = document.querySelector(".canvas-container");

function setCanvas() {
  canvasBg.width = canvasContainer.offsetWidth;
  canvasBg.height = canvasContainer.offsetHeight;
}

setCanvas();

window.onresize = setCanvas;
