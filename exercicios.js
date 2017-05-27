var tela = document.querySelector('#tela');
var c = tela.getContext("2d");

circulo = function (x, y, raio) {
    c.strokeStyle = "blue";
    c.beginPath();
    c.arc(x, y, raio, 0, 2 * Math.PI);
    c.stroke();
};

var limpaTela = function () {
    c.clearRect(0, 0, 600, 400);
};

var imagem = new image();
imagem.src = "http://www.caelum.com.br/imagens/instrutores/fotos/paulo-silveira-90.jpg";

var desenhaImagem = function (x, y) {
    c.drawImage(imagem, x, y);
};

var x = 1;

var desenha = function () {
    circulo(x, 100, 10);
    desenhaImagem(x, 200);
    x = x + 1;
};
setInterval(desenha, 30);
