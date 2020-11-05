class gun{
    constructor(bodyA,pointB){
        var joke={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.07,
            length:400
        }
        this.rope = bind.create(joke);

        this.demolish = pointB;

        World.add(world,this.rope);
    }
    bow(){
        var posA = this.rope.bodyA;
        var posB =  this.demolish;

        var t = posA.position;
        var h = posB;

        push();
        stroke("red");
        strokeWeight(4);
        line(t.x,t.y - 50,h.x,h.y);
        pop();
    }
}