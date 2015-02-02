var osc, fft;

function setup() {
  createCanvas(1600, 950);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(255);

  var waveform = fft.waveform();  // analyze the waveform
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], 0, 256, height, 0);
    vertex(x, y);
  }

  // change oscillator frequency based on mouseX
  // map(incoming value to be converted, min of current range, max of current range, min target range, max of target range)
  var freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);

  makeTheremin();
}

function makeTheremin(){
  strokeWeight(1);  
  beginShape();
  rect(400,800,900,100); // base
  quad(400,800,430,770,1270,770,1300,800); // top
  rect(1280,100,10,700); // wand
  rect(850,800,20,200); // stand
  // bezier(509, 103, 338, 99, 183, 107, 147, 136); // curved end
  // bezier(420, 800, 420, 200, 0, 0, 100, 800); // curved end
  // bezier(182,166,269,159,340,140,504,131); // curved end
}