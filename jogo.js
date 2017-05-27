var tela = document.querySelector('#tela');
var c = tela.getContext("2d");//essa parte do código é a definição do nosso pincel

c.fillStyle = "gray";//definindo a cor do nosso do nosso pincel para desenhar o quadrado 
c.fillRect(0, 0, 600, 400);//definindo em quadrado

var atira = function(evento) {
    var x = evento.pageX - tela.offsetLeft; //essa parte do código é uma subtração onde ele pega a posição e diminue
    var y = evento.pageY - tela.offsetTop; //aqui é a mesma coisa do comentário acima

    c.fillStyle = "blue";//definindo a cor da circiferencia
    c.beginPath();//mandando o nosso pincel iniciar a definição do circulo
    c.arc(x, y, 10, 0,2 * 3.14);//definindo um circulo
    c.fill();//mandando o nosso pincel fechar a circurencia

    console.log("posição de click: " + x + "," + y);
}


tela.onclick = function(evento) {
    
};
