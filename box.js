class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
      }
      display(){
       
        if(this.body.speed<3.2){
        push();
        rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,this.width,this.height,{isStatic:false})
        pop();
        }
        else{
          World.remove(world,this.body)
        }
      }
}