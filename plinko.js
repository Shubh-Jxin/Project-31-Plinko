class Plinko{
    constructor(x,y,r){
        var plinkoOptions={
            isStatic:true,
            friction:0,
            restitution:1
        }
        this.body= Bodies.circle(x,y,r,plinkoOptions);
        this.radius= r;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        noStroke();
        fill(255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

}