var bg, bgImg;
var player, non_player
var playerImg, non_playerImg;
var obstacle, obstacleImg;
var score = 0;
var life = 3;
var bullet = 70;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var bullet, bulletImg;
var gameState = "Start";
var loose, winning, blast;
var restart, restartImg;
var non_player_group,bullet_group;

function preload(){
    heart1Img = loadImage("images/heart1.png");
    heart2Img = loadImage("images/heart2.png");
    heart3Img = loadImage("images/heart3.png");
    playerImg = loadImage("images/player.png");
    non_playerImg = loadImage("images/non-player.png");
    bgImg = loadImage("images/bg.jpg");
    bulletImg = loadImage("images/fire bullet.png");
    restartImg = loadImage("images/restartImg.png");

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    player = createSprite(windowWidth/2, windowHeight - 100, 10, 10);
    player.addImage(playerImg);
    player.scale = 0.2;
    
    non_player = createSprite(windowWidth/2, windowHeight/6, 10, 10);
    non_player.addImage(non_playerImg);
    non_player.scale = 0.2;

    heart1 = createSprite(windowWidth - 100, 50, 10, 10);
    heart1.addImage(heart1Img);
    heart1.scale = 0.2;
    heart1.visible = false;

    heart2 = createSprite(windowWidth - 100, 50, 10, 10);
    heart2.addImage(heart2Img);
    heart2.scale = 0.2;
    heart2.visible = false;

    heart3 = createSprite(windowWidth - 100, 50, 10, 10);
    heart3.addImage(heart3Img);
    heart3.scale = 0.2;
    heart3.visible = false;

    restart = createSprite(windowWidth/2, windowHeight - 300);
    restart.addImage(restartImg);
    restart.visible = false;

}

function draw(){
    background(bgImg);
    drawSprites();
}