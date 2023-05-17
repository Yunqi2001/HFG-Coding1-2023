function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  grid(20, 300, 10);
  }
  
function grid(numX, numY, size) {
 for (let i = 0; i < numX; i++) {
    for (let j = 0; j < numY; j++) {
        rect(i*size, j*size, size);
    }
  }
}


  
  