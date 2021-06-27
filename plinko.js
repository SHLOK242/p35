class Plinko{

    constructor(x,y){

        this.body=Bodies.circle(x,y,50,{isStatic:false})
        World.add(world,this.body)
    }

    display(){

        push ()
        fill ("black")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,50)
        pop ()
    }
}