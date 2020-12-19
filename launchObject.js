class Polygon {
    constructor(x,y,r){
        var options={
            restitution: 0,
            density: 1.2,
            friction: 1,
            isStatic: false
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x =x;
        this.y =y;
        this.r =r;
        this.image=loadImage("bomb2.png");
        World.add(world, this.body);
    }

    display(){
        var lpos= this.body.position;
        fill("pink");
        ellipseMode(CENTER);
        imageMode(CENTER);
        ellipse(lpos.x, lpos.y, 1.9*this.r);
        image(this.image, lpos.x, lpos.y, 2*this.r, 2*this.r);
    }
}