let replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);

function replaceIt() {
    let storyDiv = document.getElementById('story');
    let firstName = "<span class = 'replacement'>" + document.getElementById("firstName").value + "</span>";
    let lastName =  "<span class = 'replacement'>" + document.getElementById("lastName").value + "</span>";
    let Age = "<span class = 'replacement'>" + document.getElementById("Age").value + "</span>";
    let theStory;
    theStory = "<h1>Приветствую!</h1>";
    theStory += "Рад встрече, " + firstName + "! " + "Напоминаю, что твоя фамилия, все ещё " + lastName + ". И тебе уже " + Age + ".";
    storyDiv.innerHTML = theStory;
}