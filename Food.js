class Food{

constructor(x,y,width,height){
var foodStock, lastFed;
this.body =  Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      this.image = loadImage('images/Milk.png')
}




display(){


var x=80, y=100;

imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock !== 0){
for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
        x=80;
        y=y+5;
    }
    image(this.image,x,y,50,50);
    x=x+30;
   }
  }
 }

 bedroom(){
    background(bedroom,550,500);
}

garden(){
   background(garden,550,500);
}
washroom(){
   background(washroom,550,500);
}

}
