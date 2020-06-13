class Division {
    constructor(x,y,w,h){
        var divisionsOptions={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,w,h,divisionsOptions);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        fill(255)
        rectMode(CENTER);
        //noStroke();
        rect(pos.x,pos.y,this.width,this.height);
    }
}