function parkingA() {
    var canvas;
    for (let index = 0; index < 14; index++) {
        canvas = document.getElementById("Canvas" + index + "");
        var ctx = canvas.getContext("2d");
        var grd = ctx.createLinearGradient(0, 0, 50, 200);
        grd.addColorStop(0, "green");
        grd.addColorStop(1, "white");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 300, 200);
    }
}

function changeColor(index, color) {
    var canvas = document.getElementById("Canvas" + index + "");
    var ctx = canvas.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 50, 200);
    if (color == 0) {
        grd.addColorStop(0, "red");
    } else {
        grd.addColorStop(0, "green");
    }
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 300, 200);
}

function changeParking(id) {
    if (document.getElementById) {
        var parking1 = document.getElementById("parking"+id+"1");
        var parking2 = document.getElementById("parking"+id+"2");        
        parking1.style.display = (parking1.style.display == 'none') ? 'block' : 'none';
        parking2.style.display = (parking2.style.display == 'none') ? 'block' : 'none';        
    }else{
        console.log("No matching");
    }
}
window.onload = function () {
    parkingA();
    changeParking("B");
}