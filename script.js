let img = document.getElementById("city")
let button1 = document.getElementById("choice1")
let button2 = document.getElementById("button2")
let counter = 0;
let start = document.getElementById("start")
let choices = document.getElementById("choices")
if(counter == 0){
    function choose(){
        img.src = "https://i33.fastpic.org/big/2013/0811/77/1bce3069471108392fccf6c804c60b77.jpg";
        button1.innerHTML = "Попробовать завести машину"
        button2.innerHTML = "Идти пешком"
        start.innerHTML = "Вы взяли палку и пошел проверить, что же или кто же был за углом. И встретились с настоящим зомби. Но вам повезло, палка очень помогла вам сбежать от недруга. Вот вы бродите по городу и... Какая удача: вы нашли заброшенную машину" 
    }
    function OtherChoose(){
        img.src = "https://api.neuro-holst.ru/api/v1/image/share/render/5D8jLaRp2NV2";
        button2.innerHTML = "Начать заново"
        start.innerHTML = "О нет! Вы встретились с зомби, а у вас в руках ничего не было, чтобы противостоять ему. Вы умерли"
        button2.style.left = '40%'
        button1.style.opacity = '0'
        choices.style.opacity = '0'
    }
    counter++
}