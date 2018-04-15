var yoff = 0.0;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(400, 400);
	drop=new Drop();
	
}

function draw(){
	background('#78e4ff');  
	var h= hour();
	var m=minute();
	var s=second();
	
  
	pool1();
	fill('#0099db');
	
	
	drop.show();
  drop.fall();
	push();
 	strokeWeight(4);
	fill(255);
	stroke(255);
	textSize(32);
	text(h+':'+ m +':'+s,150,30);
	pop();
}

function Drop(){
var s=second();
this.x=200;
this.y=0;
this.speed=6;

  
this.show=function(){

	fill('#0099db');
  stroke('#0099db');
	strokeWeight(2);
  line(this.x,this.y,this.x,this.y+15);
};
  
  this.fall=function(){
  this.y=this.y+this.speed;
  this.speed=this.speed+gravity;
	if(this.y>400){
		this.y=0
		this.speed=3.98
	};
  };
}

var drop;
var gravity=0.1;

 
function pool1() {


  //fill('#0099db');
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff = 0;       // 2D Noise
  
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
		var m=minute();
   var y = map(noise(xoff, yoff), 0, 1, 300,400)-m*5;
		

   
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.001;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
