class Baseclass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0,
             isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //var boxpos = this.body.position;
        push();
        //translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(1);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}