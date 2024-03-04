
let num = document.querySelector('input#narvore')

var arvore = 0, tentativas = 0, r = 0, gameover = 0

var numTentativas = 4

/* A função é executada assim que a página é carregada  */
window.onload = function(){
    resultado = document.querySelector('h2#res1')
    resultado2 = document.querySelector('h2#res2')
    resultado3 = document.querySelector('h2#res3')
    intrucoes = document.querySelector('p#instrucoes')
    
    intrucoes.innerHTML = "ENCONTRE O MARCIANO! <p> Ele está em uma árvore de 1 a 100;</p> <p> Você tem "+ numTentativas + " tentativas. <p> Depois disso, você será abduzido! </p>"

    novaPartida()
}

function novaPartida(){
    resultado.innerHTML = ""
    resultado2.innerHTML = ""
    resultado3.innerHTML = ""
    gameover = 0
    tentativas = 0
    document.getElementById("enviares").disabled = false
    arvore = parseInt(num.value)


    rand = parseInt(Math.random()*100)
    document.getElementById("valor").innerHTML = "Valor sorteado: " +rand;
    
}

function jogada(){
    tentativas = tentativas + 1
    arvore = parseInt(num.value)

    if(arvore == rand){
        resultado.innerHTML = "Você descobriu o marciano! <br> Parabéns!"
        resultado2.innerHTML = "Número de tentativas: "+tentativas;
        document.getElementById("enviares").disabled = true
        return
    }else if (arvore > rand){
        resultado.innerHTML = "Ele está em uma árvore menor."
        resultado2.innerHTML = "Tentativas: "+tentativas;
    }else {
        resultado.innerHTML = "Ele está em uma árvore maior."
        resultado2.innerHTML = "Tentativas: "+tentativas;
    }
    if (tentativas == numTentativas){
        resultado.innerHTML = ""
        resultado3.innerHTML = "Você foi abduzido !<br> O marciano estava na árvore: "+rand+"<br>Game over."
        document.getElementById("enviares").disabled = true
        return
    }

    if(arvore > 100 || arvore == 0 || num.value === ""){
        window.alert('Valor inválido')
    }
    
}