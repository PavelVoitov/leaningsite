let quality = ["Целеустремленность", " Усидчивость", " Внимательность", " Терпение"];
let otherQuality = [" Желание", " Мотивация", " Бедность"];
quality = quality.concat (otherQuality);
//quality = quality.join("/");
//quality.pop();
//quality.push("время")
//quality = quality.reverse();
//quality.splice(0, 0, "время");
document.getElementById("howToLeanJS").innerHTML = quality.valueOf();