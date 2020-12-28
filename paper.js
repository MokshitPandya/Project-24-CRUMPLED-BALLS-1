class Paper {
    
constructor(){
var options = {
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
}

this.x = 100;
this.y = 500;
this.radius = 50;
this.body = Bodies.circle(100,500,50/2,options);
World.add(world,this.body);

}

display(){
var pos = this.body.position;

push();

translate (pos.x,pos.y);

ellipseMode(CENTER);
fill("purple");
ellipse(0,0,50,50);

pop ();

}

}