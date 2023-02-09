var objetoDeterctor;
var carregar = false;
var objeto = [];
var speakData;
var nomeDoObjeto;

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(500, 500)
    video.hide()

}
function iniciar() {

    objetoDeterctor = ml5.objectDetector("cocossd", modelLoad)
    
    document.getElementById("Status").innerHTML = "Status:"
}

function draw() {
    image(video, 0, 0, 500, 500)

    if (carregar) {

        nomeDoObjeto = document.getElementById("caixa").value
        objetoDeterctor.detect(video, gotpose)
        for (i = 0; i < objeto.length; i++) {
            percent = floor(objeto[i].confidence * 100)
            fill("red")
            stroke("red")
            text(objeto[i].label + " " + percent + "%", objeto[i].x, objeto[i].y)

            noFill()
            stroke("red")
            rect(objeto[i].x, objeto[i].y, objeto[i].width, objeto[i].height)

            if (objeto[i].label == nomeDoObjeto) {
                speakData = nomeDoObjeto
                document.getElementById("Status").innerHTML = "Status: " + nomeDoObjeto + " encontrado"
                var synth = window.speechSynthesis;

                var utterThis = new SpeechSynthesisUtterance(speakData + "encontrado");
            
                synth.speak(utterThis);
            
                speakData = "";

            }

        }

    }
}




function gotpose(error, result) {
    console.log(result)
    if (error) {
        console.log("algo deu errado, tente novamente.")
    } else {
        objeto = result


    }
}

function modelLoad() {
    console.log("model load!")
    carregar = true;
}