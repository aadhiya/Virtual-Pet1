var dog, happyDog;
var database;
var foodS, foodStock;
var foodStock= 24;
function preload()
{
dogimg = loadImage("Dog.png");
happyDog = loadImage("happyDog.png");
}

function setup() {
  
  database = firebase.database();
  console.log(database);
  createCanvas(800, 700);
  dog = createSprite(400,300);
  dog.addImage(dogimg);
  dog.scale=0.15;
}


function draw() {  
  background("green")
if(keywentDown(UP_ARROW)){
 writeStock(foodS);
dog.addImage(happyDog);
}
if(keywentDown(UP_ARROW)){
  var foodStock-1;
 }
  drawSprites();
  text("foodStock"+score,width-300,50);
  noStroke();
  textSize(35);
  fill("white")

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){

database.ref('/').update({
Food:x
})
}

