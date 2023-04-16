let x1 = 0;
let y1 = 100;
let x2 = 100;
let y2 = 2;
let x3 = 180;
let y3 = 300;
let x4 = 300;
let y4 = 200;
let c = 10;

let ellH = 23;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255);
  
  noFill();
  stroke(211,183,197);
  strokeWeight(2);
  
  bezier(x1,y1,x2,y2,x3,y3,x4,y4);
  bezier(x1,y1+c,x2,y2+0.5*c,x3,y3+0.5*c,x4,y4+c);
  bezier(x1,y1+2*c,x2,y2+c,x3,y3+c,x4,y4+2*c);
  bezier(x1,y1-c,x2,y2-0.5*c,x3,y3-0.5*c,x4,y4-c);
  bezier(x1,y1-2*c,x2,y2-c,x3,y3-c,x4,y4-2*c);

  rotate(PI/10);
  translate(90,-90)
  stroke(155,203,207);
  fill(155,203,220);
  //triangle(125,180,130,150,170,180);
  quad(120,145,113,250,119,250,125,145)
  ellipse(100,250,ellH*1.618,ellH);
  //scale(x);

  
  beginShape();
  vertex(125,145);
  bezierVertex(145,145,130,190,165,180);
  bezierVertex(150,185,130,200,125,145);
  endShape();
 

}