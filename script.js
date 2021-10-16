
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
    let tempTent = jogo.tent.value;
    tempTent = parseInt(tempTent);
    if (isNaN(tempTent))
    {
        mensagem('Apenas números inteiros', "#553D67  ")
    }
    else if (tempTent === jogo.num)
    {
        mensagem('EM CHEIO !!!', "green  ")
    }
    else
    {
        mensagem('ERROU FEIO !!!', "red  ")
    }
    console.log ("A sua tentativa foi "+ tempTent);
}

function iniciar()
{
    jogo.num = ranNumero(jogo.min, jogo.max);
    let tempMsg = "Bem vindo, advinha um número entre "+jogo.min+" e "+jogo.max;
    mensagem(tempMsg , "black");

}
function mensagem(msg , clr)
{
    jogo.msg.innerHTML = msg;
    jogo.msg.style.color = clr || "black";
}

function ranNumero(min,max)
{                                    //entre o valor min e maximo ranNumero(95,99)= 95,96,97,98,99
    return Math.floor(Math.random()*(max-min+1)+min);
}