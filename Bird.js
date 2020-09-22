class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.array1 = [];
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   if(this.body.position.x>200 && this.body.velocity.x>5){
    var position = [this.body.position.x,this.body.position.y];
    this.array1.push(position);
   }
   
    
      for(var i = 0;i < this.array1.length;i=i+1){
        image(this.smokeImage,this.array1[i][0],this.array1[i][1]);
      }
    //console.log(this.array1);
    super.display();
  }
}
