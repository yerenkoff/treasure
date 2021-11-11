    let width = 400;
let height = 400;
let clicks = 0;

let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let map = document.getElementById("map");
let hint = document.getElementById("hint");
let pirate = document.getElementById("pirate");

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

console.log(target.x, target.y);

let getDistance = function (event) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHint = function (distance) {
    if (distance<8){
        return "Found the treasure in " + clicks + " clicks!";
    }
    else if (distance < 10) {
    return "Boiling hot!";
    } else if (distance < 20) {
    return "Really hot";
    } else if (distance < 40) {
    return "Hot";
    } else if (distance < 80) {
    return "Warm";
    } else if (distance < 160) {
    return "Cold";
    } else if (distance < 320) {
    return "Really cold";
    } else {
    return "Freezing!";
    }
}

map.onclick = (event) => {
    clicks++;
    hint.innerHTML = getDistanceHint(getDistance(event))
    console.log(event.offsetX, event.offsetY);
    pirate.style.left = event.offsetX - 25 + "px";
    pirate.style.top = event.offsetY - 25 + "px";
}