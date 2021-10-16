
let jogo = {'min': 1,
            'max' : 10};      //jogo é um objeto com os elemento classe output, classe msg, input e button

document.addEventListener("DOMContentLoaded", function()        
{
    console.log("Pronto") ;      

    jogo.res = document.querySelector('.output');
    jogo.msg = document.querySelector(".msg");
    jogo.tent = document.querySelector('input');
    jogo.btn = document.querySelector('button');
    jogo.btn.addEventListener("click",advinhaNum);
    iniciar();
});

function advinhaNum()
{
    if (jogo.btn.classList.contains('replay'))
    {
        iniciar();
        jogo.btn.innerHTML ="Advinha";
        jogo.tent.style.display ='block';
        jogo.btn.classList.remove('replay');
        //console.log('replay');
    }
    else
    {

        jogo.vidas++;
        let tempTent = jogo.tent.value;
        jogo.tent.value='';
        tempTent = parseInt(tempTent);
        if (isNaN(tempTent))
        {
            mensagem('Apenas números inteiros', "#553D67  ")
        }
        else if (tempTent === jogo.num)
        {
            mensagem(`EM CHEIO !!! ${jogo.vidas} tentativas, é o número ${jogo.num}`, "green  ")
            gameOver();
        }
        else
        {
        
            let holder = tempTent > jogo.num ? {'c':'blue','m':'É mais baixo....'}:{'c':'purple','m':'É mais alto '};
            //operador ternario para instaciar holder, se a tentativa for maior que o jogo.num
            //mensagem('ERROU FEIO !!!', "red  ");
            mensagem(holder.m,holder.c );
        }
       
      
    }
    console.log (jogo.num);
}

function iniciar()
{
    jogo.vidas=0;
    jogo.num = ranNumero(jogo.min, jogo.max);
    let tempMsg = `Bem vindo, advinha um número entre ${jogo.min} e ${jogo.max}`;
    mensagem(tempMsg , "black");

}
function mensagem(msg , clr)
{
    jogo.msg.innerHTML = msg;
    jogo.msg.style.color = clr || "black";
    jogo.tent.style.borderColor= clr || 'black';
    jogo.btn.style.backgroundColor = clr || 'black';
    jogo.btn.style.color = 'white';
}

function ranNumero(min,max)
{                                    //entre o valor min e maximo ranNumero(95,99)= 95,96,97,98,99
    return Math.floor(Math.random()*(max-min+1)+min);
}

function gameOver()
{
    jogo.btn.innerHTML ="Restart";
    jogo.tent.style.display='none';
    jogo.btn.classList.add('replay');
    jogo.max+=5;
}

///////////////////////////////////tempo/////////////////////
const dias_e=document.getElementById("dias");
const horas_e=document.getElementById("horas");
const minutos_e=document.getElementById("minutos");
const segundos_e=document.getElementById("segundos");

const ano = '1 Jan 2022';  //variavel ano 1 Jan 2022, data do primeiro dia do ano novo

function contagem(){
    const ano_novo= new Date(ano);          //ano_novo recebe valor de ano
    const data= new Date();                 //criar o objeto data

    const total_segundos=new Date(ano_novo-data)/1000;        //calculo dos segundo q faltam ate ao fim do ano, ano_novo tem valor de data de fim de ano e data tem valor da data atual

    const dias= Math.floor(total_segundos/3600/24);           //calculo dias segundos a dividir por 3600segundos(1hora)//24 horas(1dia)      
    const horas=Math.floor(total_segundos/3600)%24;           //para calcular as horas, resto da divisao por 24

    const minutos=Math.floor(total_segundos/60)%60;           //para calcular os minutos

    const segundos=Math.floor(total_segundos)%60;             //para calcular os segundos

    //console.log(dias,horas,minutos,segundos); //para testar na consola

    dias_e.innerHTML=dias;
    horas_e.innerHTML=horas;
    minutos_e.innerHTML=minutos;
    segundos_e.innerHTML=segundos;
}

function tempo(time){
    return time<10? `0${time}`:time;
}

//chamada inicial da funcao contagem
contagem();

setInterval(contagem,1000);