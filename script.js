
let jogo = {'min': 1,
            'max' : 10};      //jogo é um objeto com os elemento classe output, classe msg, input e button

document.addEventListener("DOMContentLoaded", function()        
{
    console.log("Pronto") ;      

    jogo.res = document.querySelector('.output');
    jogo.msg = document.querySelector(".msg");
    jogo.tent = document.querySelector('input');
    jogo.btn = document.querySelector('button');
    iniciar();
})

function iniciar()
{
    let tempMsg = "Bem vindo, advinha um número entre "+jogo.min+" e "+jogo.max;
    mensagem(tempMsg , "black");

}
function mensagem(msg , clr)
{
    jogo.msg.innerHTML = msg;
    jogo.msg.style.color = clr || "black";
}