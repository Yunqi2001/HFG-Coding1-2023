function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background('yellow');
    
    for(var a=0,b=0; a<mouseX,b<=mouseY; a+=50,b+=50 )
      console.log(a,b);
    
    var circleResolution = int(map(mouseX, 0, height, 2, 80));
    var angle = TAU / circleResolution;
    var radius = windowWidth /3;
    
    for(var i=0; i<=mouseX; i++){
      line(a, b,radius*cos(angle*i) + width/2, height/2-radius*sin(angle*i));
  
    }
    
    strokeWeight(5);
      
  }
