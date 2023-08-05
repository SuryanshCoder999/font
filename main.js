nosex=0;
nosey=0;
difference = 0;
rightwristx = 0;
leftwristx = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,400);
    canvas.position(600,190);

    posenet = ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotPoses);
}
function modeloaded()
{
    console.log("PoseNet is initilised");
}
function gotPoses(results)
{
    if (results.length>0)
    {console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex = " + nosex +" nosey = " + nosey);

    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = floor(leftwristx - rightwristx);

    console.log("leftWristx = " + leftwristx + " rightwristx = "+ rightwristx + "difference = " + difference);
}

}
function draw()
{
    background("yellowgreen");
    fill('black');
    stroke('blue');
    text("Suryansh",nosex,nosey);
    textSize(difference);
}