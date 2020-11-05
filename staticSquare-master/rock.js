class ore{
    constructor(x,y,width,heigth){
        var inst={
            restitution:0.5,
            friction:0.7,
            density:0.7
        }
        this.stone = Bodies.rectangle(x,y,width,heigth);
        
        this.l = heigth;
        this.b = width;

        World.add(world,this.stone);
    }
    show(){
        var p = this.stone.position;
        var ang = this.stone.angle;

        push();
        translate(p.x,p.y);
        rotate(ang);
        rectMode(CENTER);
        fill(rgb(200,190,10));
        rect(0,0,this.b,this.l);
        pop();
    }
}