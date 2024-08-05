let all_buttons = document.querySelectorAll("button");

function playAudio(x) {
    switch (x) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
        case "k":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        default:
    }
}

function toggleAnimation(x) {
    document.querySelector("." + x).classList.toggle("pressed");
}

function gotClicked() {
    let buttonHTML = this.innerHTML;
    playAudio(buttonHTML);
}

for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].addEventListener("click", gotClicked);
    all_buttons[i].addEventListener("mouseover", function () {
        toggleAnimation(this.innerHTML)
    });
    all_buttons[i].addEventListener("mouseout", function () {
        toggleAnimation(this.innerHTML);
    })


}

document.addEventListener("keydown", function (event) {
    playAudio(event.key)
    toggleAnimation(event.key)

})
document.addEventListener("keyup", function (event) {
    toggleAnimation(event.key)
});

