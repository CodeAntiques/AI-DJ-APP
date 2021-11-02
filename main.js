song="";

var left_wrist_x=0,left_wrist_y=0,right_wrist_x=0,right_wrist_y=0;

var score_left_wrist=0,score_right_wrist=0;


function preload(){
   song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(700,600);
    canvas.center();
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
    

   fill("red");
   stroke("blue");

   if (score_left_wrist>0.2) {
       
   circle(left_wrist_x,left_wrist_y,20);
   number=Number(left_wrist_y);
   decimal=floor(number);
   volume=decimal/600;
   console.log("Volume" + volume);
   document.getElementById("volume").innerHTML="Volume:" + volume;
   song.setVolume(volume);
}


  fill("green");
  stroke("yellow");

  if (score_right_wrist>0.2) {
      
  circle(right_wrist_x,right_wrist_y,20);

   if (right_wrist_y >0 && right_wrist_y <100) {
       song.rate(0.5);
       document.getElementById("speed").innerHTML="Speed:0.5";

   } else if(right_wrist_y >100 && right_wrist_y <200){
       song.rate(1);
       document.getElementById("speed").innerHTML="Speed:1";

   }
   else if(right_wrist_y >200 && right_wrist_y <200){
    song.rate(1.5);
    document.getElementById("speed").innerHTML="Speed:1.5";

   }
else if(right_wrist_y >300 && right_wrist_y <400){
    song.rate(2);
    document.getElementById("speed").innerHTML="Speed:2";

   } 
   else if(right_wrist_y >400 && right_wrist_y <600){
    song.rate(2.5);
    document.getElementById("speed").innerHTML="Speed:2.5";

   }
}

}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop(){
    song.stop();
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        right_wrist_x=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rightWrist.y;
     score_left_wrist=results[0].pose.keypoints[9].score;
     score_right_wrist=results[0].pose.keypoints[10].score;

     console.log("leftWrist"+left_wrist_x);
     console.log("leftWrist"+left_wrist_y);
     console.log("rightWrist"+right_wrist_x);
     console.log("rightWrist"+right_wrist_x);

    }
}






