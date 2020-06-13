class Ground {
    constructor(x,y,w,h){
        var groundOptions={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,w,h,groundOptions);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        fill(255)
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}