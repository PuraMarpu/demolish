class ball{
    constructor(x,y){
      var op={
          restitution:0.8,
          frictionAir:0.05,
          density:0.5
      }
      this.volley = Bodies.circle(x,y,50);

      World.add(world,this.volley);
    }
    call(){
        var pos = this.volley.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(rgb(200,10,200));
        ellipse(0,0,50);
        pop();
    }
}