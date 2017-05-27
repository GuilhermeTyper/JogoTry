var desenhaQuadradoverde = function (x, y) {

    var tela = document.getElementById("tela");
    var c = tela.getContext("2d");

    c.fillStyle = "green";
    c.fillRect(x, y, 50, 50);

    c.strokeStyle = "black";
    c.strokeRect(x, y, 50, 50);
}


var desenhaQuadradoVermelho = function (x, y) {

    var tela = document.getElementById("tela");
    var c = tela.getContext("2d");

    c.fillStyle = "red";
    c.fillRect(x, y, 50, 50);

    c.strokeStyle = "black";
    c.strokeRect(x, y, 50, 50);
}

for (var index = 0; index < 600; index = index + 50) {

    desenhaQuadradoverde(index, 0);
    desenhaQuadradoVermelho(index, 50)

}

