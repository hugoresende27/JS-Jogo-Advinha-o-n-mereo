
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