previsao = "";


Webcam.set({
    width:350,
    height:300,image_format:"png",
    pngQuality:90
});
camera = document.getElementById("camera");

Webcam.attach("#camera");

    function takeSnapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="imagemCapturada"src="'+data_uri+'"/>';
        });
    }

    console.log('ml5 version:', ml5.version);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_FqZY-hB6/model.json" , modelLoaded);

    function modelLoaded()
    {
        console.log("modelLoaded");
    }

    function check()
    {
        img = document.getElementById("imagemCapturada");
        classifier.classify(img , gotResult);
    }

    function gotResult(error,results)
    {
        if(error)
        {
            console.error(error);
        }
        else
        {
            console.log(results);
            document.getElementById("resultEmotionName").innerHTML = results[0].label;
            previsao = results[0].label;
            speak();
                if(results[0].label=="Paz e Amor")  
                    {
                        document.getElementById("updateEmoji").innerHTML = "&#9996;"
                    }
                if(results[0].label=="Legal")  
                    {
                        document.getElementById("updateEmoji").innerHTML = "&#128077;"
                    }
                if(results[0].label=="Homem-Aranha")  
                    {
                        document.getElementById("updateEmoji").innerHTML = "🤘"
                    } 
                if(results[0].label=="Palmas")  
                    {
                        document.getElementById("updateEmoji").innerHTML = "👏"
                    } 
                if(results[0].label=="Tranquilo")  
                    {
                        document.getElementById("updateEmoji").innerHTML = "&#128076;"
                    }
                  
    }

    }