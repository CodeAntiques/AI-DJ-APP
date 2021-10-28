song="";

var left_wrist_x,left_wrist_y,right_wrist_x,right_wrist_y;




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
     console.log("leftWrist"+left_wrist_x);
     console.log("leftWrist"+left_wrist_y);
     console.log("rightWrist"+right_wrist_x);
     console.log("rightWrist"+right_wrist_x);

    }
}

