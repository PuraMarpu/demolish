const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const ter = Matter.Body;
const bind = Matter.Constraint;

var engine, world;
var ground;

function setup(){
    var c = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(600,585,1200,20,ground_options);
    World.add(world,ground);
    wall = Bodies.rectangle(1190,300,10,1200,ground_options);
    World.add(world,wall);

    b1 = new ore(800,560,50,50);
    b2 = new ore(800,510,50,50);
    b3 = new ore(800,460,50,50);
    b4 = new ore(800,410,50,50);
    b5 = new ore(800,360,50,50);
    b6 = new ore(800,310,50,50);

    h = new ore(750,560,50,50);
    h2 = new ore(750,510,50,50);
    h3 = new ore(1150,560,50,50);
    h4 = new ore(1150,510,50,50);

    b7 = new ore(950,560,50,50);
    b8 = new ore(950,510,50,50);
    b9 = new ore(950,460,50,50);
    b0 = new ore(950,410,50,50);
    ba = new ore(950,360,50,50);
    ba2 = new ore(950,310,50,50);
    
    bo = new ore(1100,560,50,50);
    be = new ore(1100,510,50,50);
    bu = new ore(1100,460,50,50);
    bc = new ore(1100,410,50,50);
    bv = new ore(1100,360,50,50);
    bn = new ore(1100,310,50,50);



    shoot = new ball(300,540);

    crane = new gun(shoot.volley,{x:500,y:120});


    console.log(ground);

    Engine.run(engine);
}

function draw(){
    background(0);

    Engine.update(engine);

    push();
    fill(rgb(160,50,1));
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,40);
    rect(wall.position.x,wall.position.y,30,1200);
    pop();

    b1.show();
    b2.show();
    b3.show();
    b4.show();
    b5.show();
    b6.show();

    b7.show();
    b8.show();
    b9.show();
    b0.show();

    ba.show();
    ba2.show();

    bo.show();
    be.show();
    bu.show();
    bc.show();
    bv.show();
    bn.show();

    h.show();
    h2.show();
    h3.show();
    h4.show();

    shoot.call();

    crane.bow();
}
function mouseDragged(){
    Matter.Body.setPosition(shoot.volley,{x:mouseX,y:mouseY});
}