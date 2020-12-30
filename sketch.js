var bullet, wall;
var speed, weight;
var deformation;
var thickness;



function setup() {
  createCanvas(1600,400);

  speed = 23;
  weight = 32;
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  wall = createSprite(1500, 200, thickness, height/2);

  
}

function draw() {
  background("black");  



  if (wall.x - bullet.x < (bullet.width + wall.width)/2) {
      
      deformation = 0.5 * weight * speed/50

      if (deformation >= 10) {
          wall.shapeColor = color(255,0,0);

      }

      if (deformation < 10) {
        wall.shapeColor = color(0,255,0);

    }

      bullet.velocityX = 0;
  }


console.log (deformation)



  drawSprites();
}