function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	PoseNet = ml5.poseNet(video, modelLoaded);
	PoseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Model loaded!!")
}

function gotPoses(results){
	if(results.lenght > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("NoseX =" + noseX + "NoseY =" + noseY);
	}
}

function draw() {
	game();
}






