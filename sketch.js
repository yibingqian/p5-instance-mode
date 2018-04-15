var sketch = function(p){
    var yoff = 0.0;
    }
    
    //for any p5 specific functions, we need to put p. instead of just calling them normally
      p.setup = function() { 
      p.createCanvas(400, 400);
      p.drop=new Drop();
    } 

    p.draw =  function () {
        p.background('#78e4ff');
        var h= hour();
	      var m=minute();
	      var s=second();
        p.fill('#0099db');
        p.pool1();
        p.drop.show();
        p.drop.fall();
	      p.push();
 	      p.strokeWeight(4);
	      p.fill(255);
	      p.stroke(255);
	      p.textSize(32);
	      p.text(h+':'+ m +':'+s,150,30);
	      p.pop()
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

p.Drop = function(){
var s=second();
p.this.x=200;
p.this.y=0;
p.this.speed=6;

  
p.this.show=function(){

	p.fill('#0099db');
  p.stroke('#0099db');
	p.strokeWeight(2);
  p.line(this.x,this.y,this.x,this.y+15);
};
  
  p.this.fall=function(){
  p.this.y=p.this.y+p.this.speed;
  p.this.speed=p.this.speed+gravity;
	if(this.y>400){
		p.this.y=0
		p.this.speed=3.98
	};
  };
}

var drop;
var gravity=0.1;

 
p.pool1=function() {
  p.beginShape(); 
  var xoff = 0; 
  for (var x = 0; x <= width; x += 10) {
  
		var m=minute();
    var y = map(noise(xoff, yoff), 0, 1, 300,400)-m*5;
    p.vertex(x, y); 
    xoff += 0.05;
  }
  
  yoff += 0.001;
  p.vertex(width, height);
  p.vertex(0, height);
  p.endShape(CLOSE);
}


var myp5 = new p5(sketch, "one");
var myp5_2 = new p5(sketch, "two");       
