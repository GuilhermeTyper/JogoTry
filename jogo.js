var tela = document.querySelector('#tela');
var c = tela.getContext("2d");//essa parte do código é a definição do nosso pincel

c.fillStyle = "gray";//definindo a cor do nosso do nosso pincel para desenhar o quadrado 
c.fillRect(0, 0, 600, 400);//definindo em quadrado

var atira = function (evento) {
    var x = evento.pageX - tela.offsetLeft; //essa parte do código é uma subtração onde ele pega a posição e diminue
    var y = evento.pageY - tela.offsetTop; //aqui é a mesma coisa do comentário acima

    c.fillStyle = "blue";//definindo a cor da circuferencia
    c.beginPath();//mandando o nosso pincel iniciar a definição do circulo
    c.arc(x, y, 10, 0, 2 * 3.14);//definindo um circulo
    c.fill();//mandando o nosso pincel fechar a circurencia

    console.log("posição de click: " + x + "," + y);
};

var circulo = function (x, y, raio) {
    c.fillStyle = "blue";
    c.beginPath();
    c.arc(x, y, raio, 0, 2 * Math.PI);//nesse exemplo usamos o Math e o atributo que ja tem uma constante chamada PI
    c.fill();
};

var limpaTela = function () { //definição de variavel com uma função que tem como objetivo limpar a tela
    c.clearRect(0,0,600,400);
};

var x = 1; //definição de uma variavel que usaremos dentro da função que é atribuida a variavel desenha

var desenha = function() {
    limpaTela();//toda vez que algo for adicionado na tela exemplo os nosso click ele ira se auto apagar
    circulo(x,100,10);//chamndo a função circulo ja defininso os seus parametros
    x = x + 1;//usando a variavel que declaramos fora da função
};

setInterval(desenha,30);
tela.onclick = atira;
