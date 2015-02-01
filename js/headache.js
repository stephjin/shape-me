// create canvas
function setup() {
  createCanvas(1700, 1000);
}

function makesLinesA(x, y, numLines) {
  beginShape();
  for (var i = 0; i < numLines; i++){
    line(x,y,x*.3,y*.2);
    x+=20;
  }
  endShape(CLOSE);
}

function makesLinesB(x, y, numLines) {
  beginShape();
  for (var i = 0; i < numLines; i++){
    line(x*.3,y*.2,x,y);
    x+=20;
  }
  endShape(CLOSE);
}

function draw() {
  background(255);

  push();
  rotate(frameCount/.5);
  makesLinesA(60, 720, 100);
  pop();    

  push();
  rotate(frameCount/.5);
  makesLinesB(720, 600, 100);
  pop();   

  push();
  rotate(frameCount/50);
  makesLinesB(100, 600, 1000);
  pop();  

}