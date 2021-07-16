Webcam.set({
    width:360,
    height:250,
    Image_format:250,
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='img' src='" + data_uri + "'>";
    });
}

console.log("ml5 version :" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/model.json" , modelLoaded);

function modelLoaded()
{
    console.log("model is loaded");
}

function check() 
{
    img = document.getElementById('image');
    classifier.classify(img, gotResult);
}

function gotResult()
{
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accurasy").innerHTML = results[0].confidence.toFixed(2);
    }
}