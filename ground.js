class Ground {
    constructor(){
    
    var options = {
    isStatic : true
    }

    this.x = 400;
    this.y = 660;
    this.width = width;
    this.height = 15;
    this.body = Bodies.rectangle(400,660,width,15,options)
    World.add(world,this.body)
    
    }
    display(){
    rectMode(CENTER);
    fill ("yellow")
    rect(400, 660, width, 15);
    
    }
    
    }