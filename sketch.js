var canvas;
var gameState,contestantCount;
var database,question,quiz,contestant;
function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
if(contestantCount===1){
  quiz.update(1);
  quiz.start();
}
if(gameState===1){
  clear();
  quiz.play();
}
  
}
