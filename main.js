songname = "music.mp3" 
song = "music2.mp3" 
 function setup()
{
     canvas = createCanvas(600, 500); 
     canvas.center(); 

     video = createCapture(VIDEO);  
     video.hide();  

} 
function draw() 
{
  image(video, 0, 0, 600, 500); 

} 
function preload() 
{
    songname = loadSound("music.mp3"); 
    song = loadSound("music2.mp3"); 
}  
function play() 
{
    song.play(); 
}