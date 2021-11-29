song=""
 song2=""
score_left_wrist=0;
score_right_wrist=0;
 var left_wrist_x=0,left_wrist_y=0,right_wrist_x=0,right_wrist_y=0;


function preload(){
  song=loadSound("music.mp3");
  song2=loadSound("music2.mp3");
 }

 function setup(){
    canvas=createCanvas(700,600);
    canvas.position(600,250);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modeloaded);
    poseNet.on('pose',gotPoses);
  }

  
  function modeloaded(){
    console.log("PoseNet has been Intialized");
}

  function draw(){
    image(video,0,0,700,600);
 
  if (score_left_wrist>=0.2) {
    
    fill("red");
    circle(left_wrist_x,left_wrist_y,20);
    song.setVolume(1);
    song.rate(1);
    song.play();
    document.getElementById("song_name").innerHTML="Play Harry Potter Theme Song";
    song2.stop();
  }
  if (score_right_wrist>=0.2) {
    
    fill("red");
    circle(right_wrist_x,right_wrist_y,20);
    song2.setVolume(1);
    song2.rate(1);
    song2.play();
    document.getElementById("song_name").innerHTML="Play Peter Pan Theme Song";
    song.stop();

  }
 }

 function gotPoses(results){
  if (results.length > 0) {
      console.log(results);
      left_wrist_x=results[0].pose.leftWrist.x;
      left_wrist_y=results[0].pose.leftWrist.y;
      right_wrist_x=results[0].pose.rightWrist.x;
      right_wrist_y=results[0].pose.rightWrist.y;
   console.log("leftWrist"+left_wrist_x);
   console.log("leftWrist"+left_wrist_y);
   console.log("rightWrist"+right_wrist_x);
   console.log("rightWrist"+right_wrist_x);
   score_left_wrist=results[0].pose.keypoints[9].score;
   score_right_wrist=results[0].pose.keypoints[10].score;

  }
  
}
 


 
 
 