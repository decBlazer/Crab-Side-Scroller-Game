var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e4d92048-f73f-4cd0-ad75-bf76d38f0a8c","6c7c2a66-db57-4889-a129-cdf696fbe736","4fef1ae2-cb1c-4865-9036-99d6d1d3074e","d3659aeb-ba3e-4d17-b56d-8db68f4dd944","ce3b1cc3-9b7a-44f8-82ef-5bfb6485c7ee","91f10853-18cd-4566-b11e-e0ec3a42b694","835b990e-3801-47b7-a12e-5c0979be890e","32670e18-1679-4c1d-b293-b7cb3871c22a"],"propsByKey":{"e4d92048-f73f-4cd0-ad75-bf76d38f0a8c":{"name":"sun_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png"},"6c7c2a66-db57-4889-a129-cdf696fbe736":{"name":"cloud_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png"},"4fef1ae2-cb1c-4865-9036-99d6d1d3074e":{"name":"crab_1","sourceUrl":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"k76J3fnUizuR.cly1ePZrTD5O0KW3BIz","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png"},"d3659aeb-ba3e-4d17-b56d-8db68f4dd944":{"name":"rock_1","sourceUrl":null,"frameSize":{"x":90,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"SPQJnvEXGcngaJ8R16IZYg_YWSoLDIw0","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":47},"rootRelativePath":"assets/d3659aeb-ba3e-4d17-b56d-8db68f4dd944.png"},"ce3b1cc3-9b7a-44f8-82ef-5bfb6485c7ee":{"name":"soda_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oQKDcUcRzZnXdEF0ONTGlxxkPoTW8LNS/category_food/soda.png","frameSize":{"x":186,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"oQKDcUcRzZnXdEF0ONTGlxxkPoTW8LNS","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":186,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oQKDcUcRzZnXdEF0ONTGlxxkPoTW8LNS/category_food/soda.png"},"91f10853-18cd-4566-b11e-e0ec3a42b694":{"name":"frog","sourceUrl":"https://studio.code.org/media?u=https%3A%2F%2Fstudio.code.org%2Fv3%2Fanimations%2FbxS7XEWi1VaoTNG6cCQcDA%2F91f10853-18cd-4566-b11e-e0ec3a42b694.png%3Fversion%3DRRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","frameSize":{"x":104,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":70},"rootRelativePath":"assets/https://studio.code.org/media?u=https%3A%2F%2Fstudio.code.org%2Fv3%2Fanimations%2FbxS7XEWi1VaoTNG6cCQcDA%2F91f10853-18cd-4566-b11e-e0ec3a42b694.png%3Fversion%3DRRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX"},"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"mushroom","sourceUrl":"https://studio.code.org/media?u=https%3A%2F%2Fstudio.code.org%2Fv3%2Fanimations%2FbxS7XEWi1VaoTNG6cCQcDA%2F835b990e-3801-47b7-a12e-5c0979be890e.png%3Fversion%3DDi9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","frameSize":{"x":60,"y":63},"frameCount":1,"looping":true,"frameDelay":12,"version":"Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":63},"rootRelativePath":"assets/https://studio.code.org/media?u=https%3A%2F%2Fstudio.code.org%2Fv3%2Fanimations%2FbxS7XEWi1VaoTNG6cCQcDA%2F835b990e-3801-47b7-a12e-5c0979be890e.png%3Fversion%3DDi9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN"},"32670e18-1679-4c1d-b293-b7cb3871c22a":{"name":"fly","sourceUrl":"assets/https://studio.code.org/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/https://studio.code.org/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//GAME SETUP
// Create the sprites
// set velocity for the obstacle and the target
var crab = createSprite(100, 275);
crab.setAnimation("crab_1");
crab.scale = 0.35;
var rock = createSprite(400, 275);
rock.setAnimation("rock_1");
rock.scale = 1.15;
rock.velocityX = -3;
var crab_soda = createSprite(300, randomNumber(50, 150));
crab_soda.setAnimation("soda_1");
crab_soda.scale = 0.35;
crab_soda.velocityX = -3;

//create the variables
var score = 0;
var health = 100;
function draw() {
  // BACKGROUND
  // draw the ground and other background
  background(rgb(83, 199, 240));
  fill(rgb(246, 228, 173));
  rect(0, 300, 400, 300);

  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (crab.isTouching(rock)) {
    health = health - 1;
    rock.rotation = 20;
  } else {
    rock.rotation = 0;
  }

  // if the frog touches the fly
  // the score goes up, the fly resets
  if (crab.isTouching(crab_soda)) {
    score = score + 1;
    crab_soda.x = randomNumber(400, 450);
    crab_soda.y = randomNumber(50, 200);
  }

  // JUMPING
  // if the player has reached the ground
  // stop moving down
  if (crab.y > 280) {
    crab.velocityY = 0;
  }

  // if the player presses the up arrow
  // start moving up
  if (keyWentDown("up")) {
      crab.velocityY = -4;
    }
  // if the player reaches the top of the jump
  // start moving down
if (crab.y < 50) {
    crab.velocityY = 4;
  }
  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (rock.x < -35) {
    rock.x = 435;
  }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if (crab_soda.x < -35) {
    crab_soda.x = randomNumber(430, 450);
  }

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("Score:", 280, 60);
  text(score, 350, 60);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 75, 200);
  }
  if (score >= 15) {
  background("black");
  fill("yellow");
  textSize(50);
  text("You won!" , 100, 200);  
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
