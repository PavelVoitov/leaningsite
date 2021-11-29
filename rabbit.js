let rabbitSpeed = 250;
let rabbitPosition = 0;
let animation;
let rabbit = document.getElementById("rabbit");
rabbit.addEventListener("click", speedUp);


let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopRabbit);

function speedUp() {
    if (rabbitSpeed > 10) {
        rabbitSpeed -= 10;
    }

    clearInterval(animation);
    animation = setInterval(frame, rabbitSpeed);


    function frame() {
        rabbitPosition += 2;
        rabbit.style.left = rabbitPosition + "px";
        checkPosition(rabbitPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 250) {
        alert(":O!");
        clearInterval(animation);
    }
}

function stopRabbit() {
    if (rabbitPosition < 250) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}