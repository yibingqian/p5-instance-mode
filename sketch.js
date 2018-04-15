var sketch = function(p){
  var yoff = 0.0;  
  var h= hour();
	var m=minute();
	var s=second();
}

p.setup = function() { 
      p.createCanvas(400, 400);
      p.drop=new Drop(); 
    }
 p.draw =  function () {
  var h= hour();
	var m=minute();
	var s=second();
  p.background('#78e4ff');      
	p.pool1();
	p.fill('#0099db');
	p.drop.show();
  p.drop.fall();
	p.push();
 	p.strokeWeight(4);
	p.fill(255);
	p.stroke(255);
	p.textSize(32);
	p.text(h+':'+ m +':'+s,150,30);
	p.pop();
}    

p.Drop = function(){

}

p.Drop =function(){
var s=second();
p.this.x=200;
p.this.y=0;
p.this.speed=6;

  
p.this.show=function(){

	p.fill('#0099db');
  p.stroke('#0099db');
	p.strokeWeight(2);
  p.line(p.this.x,p.this.y,p.this.x,p.this.y+15);
};
  
  p.this.fall=function(){
  p.this.y=p.this.y+p.this.speed;
  p.this.speed=p.this.speed+gravity;
	if(p.this.y>400){
		p.this.y=0
		p.this.speed=3.98
	};
  };
}

var drop;
var gravity=0.1;

 
p.pool1=function() {
  var xoff = 0;       // 2D Noise
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

var myp5 = new p5(sketch, "one");
var myp5_2 = new p5(sketch, "two");
