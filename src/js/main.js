window.onload = function () {
    //https://css-tricks.com/snippets/javascript/random-hex-color/
    //set page bg
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

    var days = getDiff();

    //set counter
    var counter = document.getElementById("count");
    if (days == 0) {
        counter.textContent = `Es ist Heiligabend!`;
    } else {
        counter.textContent = days;
    }
   
    //set title
    if (days == 0) {
        document.title = `Es ist Heiligabend!`;
    } else {
        document.title = `Es ${days == 1 ? `ist` : `sind`} noch ${days} Tag${days == 1 ? `` : `e`} bis Heiligabend`;
    }

    //generate favicon
    var favicon = document.getElementById('favicon');
    var canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    var ctx = canvas.getContext('2d');
    ctx.font = "800 60px Dosis";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "white";
    ctx.fillText(days, 50, 50);
    favicon.href = canvas.toDataURL('image/png');
};

function getDiff() {
    //https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php
    var today = new Date();
    var xmas = new Date(today.getFullYear(), 11, 24);
    if (today.getMonth() == 11 && today.getDate() > 24) {
        xmas.setFullYear(xmas.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    return Math.ceil((xmas.getTime() - today.getTime()) / (one_day));
}