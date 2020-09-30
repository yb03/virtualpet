//Create variables here

var dogimg1, dogimg2, dog;
var database, foodS, foodStock

function preload()
{
 dogimg1=loadImage("images/dogImg.png")
 dogimg2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(400,350,70,70)
  dog.addImage(dogimg1);
  dog.scale=0.35;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background("white");
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogimg2);
  }
  
  drawSprites();
  text("foodRemaining:"+foodS,200,200);
  //add styles here

}

function readStock(data)
{
  foodS=data.val()
}
function writeStock(x)
{
if (x<=0) 
{
x=0;  
}
else{x=x-1};
database.ref('/').update({
  Food: x
})
}
