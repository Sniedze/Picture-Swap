let counter = 4;
let click=0;
let flowers = document.querySelectorAll("img");
let startButton=document.querySelector("button");
let audio=document.querySelector(".spring");
let myIntervalId;


//startButton.addEventListener("click", fadeImage);
startButton.addEventListener("click", count);

function fadeImage(){

    //console.log(counter)
    flowers[counter].classList.add("picked");
    counter--
    if (counter==-1){
        counter=4;
        flowers.forEach(reset);
        /*flowers[0].classList.remove("picked");
        flowers[1].classList.remove("picked");
        flowers[2].classList.remove("picked");
        flowers[3].classList.remove("picked");
        flowers[4].classList.remove("picked"); */
        }


    }
function reset(aSingleFlower){
    console.log(aSingleFlower)
    aSingleFlower.classList.remove("picked")
}
 function count() {
    click++;
    console.log(click);
    if (click==1){
        audio.play();
        myIntervalId = setInterval(fadeImage, 2500);

    }
    if (click==2){
        audio.pause()
        click=0;
        clearInterval(myIntervalId);
        console.log(myIntervalId)
    }
}

/*
flowers.forEach(addClass);

function addClass(eachFlower, index) {
    eachFlower.addEventListener(listClicked);
    setInterval(2000);

}

function listClicked(evt) {
    console.log(evt.target);
    evt.target.classList.add("picked");

}

function count() {
    click++;
    console.log(click)
    if (click == 3) {
        audi.play();
    }
}
*/
