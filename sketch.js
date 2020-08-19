var dog,dogimage,dogimage1,milk,milkimage;
var garden,washroom,BedRoom,Living;

function preload()
{
  dogimage=loadImage("images/dogImg.png");
  dogimage1=loadImage("images/happydog.png");
  milkimage=loadImage("images/Food Stock.png");
  garden=loadImage("images/Garden.png");
  washroom=loadImage("images/Wash Room.png");
  BedRoom=loadImage("images/Bed Room.png");
  Living=loadImage("images/Living Room.png");
	//load images here
}
var score=1;
function setup() {
  createCanvas(800, 700);
  dog=createSprite(400,350,50,50);
  dog.addImage(dogimage);
  dog.scale=0.25;

  milk=createSprite(700,600,50,50);
  milk.addImage(milkimage);
  milk.scale=0.1;
  
}


function draw() { 
  background("green");

    if (keyCode ===38) {
      score=score-1;
      dog.addImage(dogimage1)
      if (score<0) {
        score=0;
      }
    }
    if (keyCode ===40) {
      score=1;
      dog.addImage(dogimage);

    }

    if (score===0) {
      milk.visible=false;
    }
    if (score===1) {
      milk.visible=true;
    }

    if (keyCode ===13) {
      dog.addImage(garden);
      dog.scale=1;
    }
    else {
      dog.scale=0.25;
    }


    if (keyCode===9) {
      dog.addImage(washroom);
      dog.scale=1;
    }


    if (keyCode===8) {
      dog.addImage(BedRoom);
      dog.scale=1;


    }

    if (keyCode===16) {
      dog.addImage(Living);
      dog.scale=1;
    }






  textSize(34);
  text("Food Remaining :"+score,200,220);
  textSize(20);
  text("Press Up Arrow To Feed",200,50);
  text("Press Down Arrow To Refill",200,75);
  text("Press Enter To Go To Garden",200,175);
  text("Press Tab To Take The Dog To Wash Room",200,100);
  text("Press BackSpace To Take It To The Bed Room",200,125);
  text("Press Shift To Shift The Dog To Living Room",200,150);

  drawSprites();
  //add styles here
  dog.display();

}






