// obtendo elementos do DOM para iteração
const houses = document.getElementsByTagName('input');//pega a lista de casas do tabuleiro do jogo
const restart = document.getElementById('restart'); // pega o elemento button restart
const label_player = document.getElementById('player');//pega o label player que usaremos para mostar qual jogador tem a vez

//definindo variaveis de estado do jogo
var player = "_"; //define jogador atual (_= player indefinido; X = player x, 0 = player 0;)
var winner = "_"; // define se há um vencedor ou não (_ indefido; X = player X; 0 = player 0)


//define a respostas ao evento clique nas casas do tabuleiro
for( var i = 0;i < 9; i++){
    houses[i].addEventListener('click', (event)=>{
        // se a casa estiver vazia e ninguem estiver vencido a partida
        if((event.target.value =='_') && (winner =='_')){
            event.target.value = player; // prencher a casa com X ou 0
            event.target.style.color = 'black'; //torna o valor da casa visivel
            exchengePlayer();// função que troca a vez do jogador
            winner = win(); // executa a função win()
            if(winner!='_'){
                label_player.innerHTML=`${winner} venceu!`
            }
        }
    });
}
// define a resposta ao evento de clique no botão reiniciar 
restart.addEventListener('click',(event) => {
    for(var i = 0; i< 9;i++){
        houses[i].value='_'; //limpa todas as casas
        houses[i].style.color ='white'; // torna o valor invisivel 
        houses[i].style.backgroundColor = 'white'; // torna o fundo branco
    }
    winner = '_';
    drawPlayer();
});
// funcão que decide aleatoriamente o jogador a fazer a primeira jogada 
var drawPlayer = function () {
    if(Math.floor(Math.random()*2)==0){
        player = 0; // define o jogador 0 como atual
        label_player.innerText = '0'; // Exide na pagina quem é o jogador atual
        label_player.style.color='#F00'; //deixa o texto na cor vermelha
    }else{
        player = 'X'; // define jogador X como atual
        label_player.innerText ='X';//exibe na pagina qual é o jogador atual
        label_player.style.color = "#00F"// deixa o texto na cor azul
    }
}
drawPlayer();

//alterna entre os jogadores
var exchengePlayer = function(){
    if(player=='X'){
        player='0';
        label_player.innerText='0';
        label_player.style.color='#F00';
    }else{
        player = 'X';
        label_player.innerText='X';
        label_player.style.color = "#00F"
    }
}
var win = function(){
    if((houses[0].value == houses[1].value) && (houses[1].value== houses[2].value) && houses[0].value!='_'){
        houses[0].style.backgroundColor = '#0F0';
        houses[1].style.backgroundColor = '#0F0';
        houses[2].style.backgroundColor = '#0F0';
        return houses[0].value;
    }else if((houses[3].value == houses[4].value) && (houses[4].value==houses[5].value)&& houses[3].value!='_'){
        houses[3].style.backgroundColor='#0F0';
        houses[4].style.backgroundColor='#0F0';
        houses[5].style.backgroundColor='#0F0';

        return houses[3].value;
    }else if((houses[6].value==houses[7].value) && (houses[7].value==houses[8].value) && houses[6].value!='_' ) {
        houses[6].style.backgroundColor='#0F0';
        houses[7].style.backgroundColor='#0F0';
        houses[8].style.backgroundColor='#0F0';

        return houses[6].value;

    }else if((houses[0].value==houses[3].value) && (houses[3].value==houses[6].value) && houses[0].value!='_' ) {
        houses[0].style.backgroundColor='#0F0';
        houses[3].style.backgroundColor='#0F0';
        houses[6].style.backgroundColor='#0F0';

        return houses[0].value;

    }else if((houses[1].value==houses[4].value) && (houses[4].value==houses[7].value) && houses[1].value!='_' ) {
        houses[1].style.backgroundColor='#0F0';
        houses[4].style.backgroundColor='#0F0';
        houses[7].style.backgroundColor='#0F0';

        return houses[1].value;

    }else if((houses[2].value==houses[5].value) && (houses[5].value==houses[8].value) && houses[2].value!='_' ) {
        houses[2].style.backgroundColor='#0F0';
        houses[5].style.backgroundColor='#0F0';
        houses[8].style.backgroundColor='#0F0';

        return houses[2].value;
    }else if((houses[0].value==houses[4].value) && (houses[4].value==houses[8].value) && houses[0].value!='_' ) {
        houses[0].style.backgroundColor='#0F0';
        houses[4].style.backgroundColor='#0F0';
        houses[8].style.backgroundColor='#0F0';

        return houses[0].value;

    }else if((houses[2].value==houses[4].value) && (houses[4].value==houses[6].value) && houses[2].value!='_' ) {
        houses[2].style.backgroundColor='#0F0';
        houses[4].style.backgroundColor='#0F0';
        houses[6].style.backgroundColor='#0F0';

        return houses[2].value;
    }

    return '_';
}
