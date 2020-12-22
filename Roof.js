class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var posit =this.body.position;
      
      push();
      translate(posit.x,posit.y);
      rectMode(CENTER);
      fill("yellow");
      rect(0,0, this.width, this.height);
      pop();
    }
  }