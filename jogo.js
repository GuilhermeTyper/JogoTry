var tela = document.querySelector('#tela');
var c = tela.getContext("2d");

c.fillStyle = "gray";
c.fillRect(0, 0, 600, 400);

tela.onclick = function(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    c.fillStyle = "blue";
    c.beginPath();
    c.arc(x, y, 10, 0,2 * 3.14);
    c.fill();

    console.log("posição de click: " + x + "," + y);
}
