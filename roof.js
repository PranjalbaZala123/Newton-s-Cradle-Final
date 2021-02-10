class Roof{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(200,150,50,50,options);
       this.width=50;
       this.height=50;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
      }
}