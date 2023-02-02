var objetoDeterctor;
var carregar = false;


function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(500,500)
    video.hide()
   
}
function iniciar() {

    objetoDeterctor = ml5.objectDetector("cocossd", modelLoad)
    document.getElementById("Status").innerHTML = "Status: objeto detectado"
}

function draw() {
image(video,0,0,500,500)    
}

function modelLoad() {
console.log("model load!")
carregar = true;
}