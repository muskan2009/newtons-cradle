class Rope {
    constructor(body1,point2,offSetX,offSetY){

        this.offSetX = offSetX;
        this.offSetY = offSetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
           pointB={x:this.offsetX,y:this.offsetY}
    }
    this.rope=Constraint.create(options)
    World.add(world.this.rope)
}
    attach(body){
        this.rope.bodyA = body;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
        if (this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(40,22,8)
            strokeWeight(3)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop()
        }
    }
}