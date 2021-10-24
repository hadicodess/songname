song = "" 
leftWristX = "" 
leftWristY = "" 
rightWristX = "" 
rightWristY = "" 
scoreleftWrist = 0 
scorerightWrist = 0
 function setup()
{
     canvas = createCanvas(600, 500); 
     canvas.center(); 

     video = createCapture(VIDEO);  
     video.hide();  

     poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses); 
} 
function modelLoaded() 
{
  console.log('PoseNet is initialized'); 
}
function draw() 
{
  image(video, 0, 0, 600, 500);  
  fill("#CB1717"); 
  stroke("#CB1717");   
  
  circle(rightWristX, rightWristY, 20); 

  if(rightWristY > 0 && rightWristY <= 100) 
  {
    document.getElementById("speed").innerHTML = "speed = 0.5x";  
    song.loadSound("music.mpc2"); 
  } 

if(scoreleftWrist > 0.2){
  
}
  circle(leftWristX, leftWristY, 20); 
  InNumberleftWristY = Number(leftWristY); 
  remove_decimals = floor(InNumberleftWristY); 
  volume = remove_decimals/500;  
  document.getElementById("volume").innerHTML = "Volume ="+ volume; 
  song.loadSound("music2.mp2"); 
} 
function preload() 
{
    song = loadSound("music.mp3"); 
}  
function play() 
{
    song.play(); 
    song.setVolume(1); 
    song.rate(1); 
} 
 function gotPoses(results) 
 {
   if(results.length > 0) 
   {
     console.log(results); 
     scoreleftWrist = results[0].pose.keypoints[9].score; 
     scorerightWrist = results[0].pose.keypoints[16].score;  
     console.log("scoreLeftWrist =" + scoreleftWrist + "scorerightWrist =" + scorerightWrist);
     
     leftWristX = results[0].pose.leftWrist.x; 
     leftWristY = results[0].pose.leftWrist.y;   
     console.log("leftWristX = " + leftWristX + "leftWristY =" + leftWristY); 

     rightWristX = results[0].pose.rightWrist.x; 
     rightWristY = results[0].pose.rightWrist.y;
     console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY); 

   }
 } 


