const container = document.getElementById('maze')
const resultado = document.getElementById("resultado")


const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

for (let i = 0; i < map.length; i++){

    const divLinha = document.createElement('div')
    divLinha.classList.add('linha')
    container.appendChild(divLinha)

    for(let j = 0; j < map[i].length; j++){

        if (map[i][j] == 'W'){
           const div = document.createElement('div')
           div.classList.add('w')
           div.setAttribute("data-linha", i)
           div.setAttribute("data-coluna", j)
           divLinha.appendChild(div)
        }
        else if(map[i][j] == ' '){
            const div = document.createElement('div')
            div.classList.add('espaco')
            div.setAttribute("data-linha", i)
            div.setAttribute("data-coluna", j)
            divLinha.appendChild(div)
        }
        else if(map[i][j] == 'S'){
            const div = document.createElement('div')
            div.classList.add('inicio')
            div.setAttribute('id','inicio')
            div.setAttribute("data-linha", i)
            div.setAttribute("data-coluna", j)
            divLinha.appendChild(div)
        }
        else if(map[i][j] == 'F'){
            const div = document.createElement('div')
            div.classList.add('final')
            div.setAttribute('id','final')
            div.setAttribute("data-linha", i)
            div.setAttribute("data-coluna", j)
            divLinha.appendChild(div)
        }
    }
}

const jogador = document.createElement('div')
jogador.classList.add('jogador')
const inicio = document.getElementById('inicio')
inicio.appendChild(jogador)
const pai = jogador.parentElement

// const paiLinha = pai.dataset.linha
// const paiColuna = pai.dataset.coluna
// const direita = paiColuna + 1
// const esquerda = paiColuna - 1
// const cima = paiLinha - 1
// const embaixo = paiLinha + 1
// const direita = document.div.querySelector("coluna=paiColuna+1, linha=paiLinha")

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    let jogadorLinha = parseInt(jogador.parentElement.dataset.linha);
    let jogadorColuna = parseInt(jogador.parentElement.dataset.coluna);


    if (keyName == 'ArrowUp'){
        jogadorLinha -= 1;

        //pegar o jogador e fazer appendchild na div cujo atributo 
        //linha = pai - 1
        //coluna = coluna pai
    }
    else if(keyName == 'ArrowDown'){
        jogadorLinha += 1;

        //pegar o jogador e fazer appendchild na div cujo atributo
        //linha = pai + 1
        // coluna = coluna pai
        }
    else if (keyName == 'ArrowLeft'){
        if(jogador.parentElement !== inicio){
        jogadorColuna -= 1;
    }
        //pegar o jogador e fazer appendchild na div cujo atributo 
        //coluna = pai - 1
        //linha = linha pai
        }
    else if (keyName == 'ArrowRight'){
        jogadorColuna += 1;

        //pegar o jogador e fazer appendchild na div cujo atributo 
        //coluna = pai + 1
        //linha = linha pai
        }
        let novoPai = document.querySelector(`[data-linha=\'${jogadorLinha}\'][data-coluna=\'${jogadorColuna}\']`);
        if (novoPai.classList == 'espaco' || novoPai.classList == 'inicio'){
            novoPai.appendChild(jogador)
        }
        else if (novoPai.classList == 'final'){
            novoPai.appendChild(jogador)
            container.classList.add('hidden')
            resultado.classList.remove('hidden')
        }
        
        
  })

//   console.log(`linha >>>>> ${paiLinha}, coluna >>>>> ${paiColuna}`)
//   console.log(`direita >>>>> ${direita}, esquerda >>>>> ${esquerda}`)
//   console.log(`cima >>>>> ${cima}, embaixo >>>>> ${embaixo}`)
