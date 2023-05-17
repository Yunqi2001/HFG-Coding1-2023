function setup() {
    createCanvas(300, 300);
  }
  
  function draw() {
    background('rgba(0,0,0,0.66)');
    MusicSheet(0,100,100,2,180,300,300,200,17,'rgb(197,165,212)');
  
    rotate(PI/10);
    translate(90,-90)
    aNote("#FFEB3B");
  }
  
  function MusicSheet(x1,y1,x2,y2,x3,y3,x4,y4,c,sheetColor){
    noFill();
    stroke(sheetColor);
    strokeWeight(3);
    
    for (let i = 0; i <= 5; i++) {
    bezier(x1, y1 + i*c, x2, y2 + i*0.5*c, x3, y3 + i*0.5*c, x4, y4 + i*c);
    }
  }
  
  function aNote(noteColor){
    noStroke();
    fill(noteColor);
    quad(120,145,113,250,119,250,125,145)
    ellipse(100,250,23*1.618,23);
    
    beginShape();
    vertex(125,145);
    bezierVertex(145,145,130,190,165,180);
    bezierVertex(150,185,130,200,125,145);
    endShape();
  }