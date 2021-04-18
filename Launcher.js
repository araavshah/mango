class Launcher{
    constructor(body, anchor){
        var option={
            bodyA: body,
            pointB: anchor,
            stiffness: 0.007,
            length: 1
        }
        
        this.bodyA = body
            this.pointB = anchor
            this.Launcher=Constraint.create(option)
            World.add(world,this.Launcher)
        }
    
        attach(body){
            this.Launcher.bodyA=body;
        }
    
        fly()
        {
            this.Launcher.bodyA=null;
        }
    
        display()
        {
            if(this.Launcher.bodyA)
            {
                var pointA=this.bodyA.position;
                var pointB=this.pointB
    
                strokeWeight(3);	
                stroke('blue')	
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }