<em>03 - Entrega: Labirinto</em>

<h1>Entrega: Labirinto</h1>

Hoje você criará um jogo em JavaScript que exibe um labirinto e permite que o jogador use as teclas de cursor para se mover por ele um passo de cada vez. O labirinto é um array 2D de células que representam o chão (transponíveis) ou paredes (intransponíveis).

![exemplo](./example.gif)

Este JavaScript representa o labirinto descrito acima. Cada "W" representa uma parede, "S" a posição inicial e "F" a linha de chegada. Os espaços são células vazias por onde o jogador pode se movimentar.

```
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
```

<h2>Orientação</h2>

<ol>
<li>

Faça com que cada célula do labirinto seja um DIV.
</li>
<li>

Faça de cada linha do labirinto um DIV usando "display: flex;"
</li>
<li>

Escolha uma opção: A) use um DIV absolutamente posicionado para representar a posição atual do jogador no labirinto, ou B) faça o DIV do jogador ser anexado ([appended](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)) a uma célula DIV pelo mesmo motivo.
</li>
<li>

Você precisa registrar (ou receber via solicitação) a posição atual do jogador no labirinto (índices de linha e de coluna). Você pode fazer isso de uma entre várias maneiras. Você poderia manter um registro persistente da posição do jogador em um, digamos, array ou objeto global cujo a função é a de registrar a posição atual do jogador. Você poderia atualizar seu array de mapa constantemente para refletir o movimento do jogador (mover o "S" pelo mapa). Você pode manter seus índices em [atributos de dados](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes) em seu HTML e acessá-los através da propriedade DIV de jogador ["parentElement"](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement) (no caso do 3B). Ou você poderia fazer um pouco de matemática na posição atual do DIV do jogador na tela, relativo à posição inicial do elemento de início na tela e ao tamanho das células (no caso do 3A).
</li>
<li>

O movimento pode ser realizado de algumas maneiras diferentes: No caso do 3A, mude a posição absoluta do DIV do jogador. Ou, no caso do 3B, faça o append do DIV do jogador ao próximo DIV de célula. (Você poderia usar ["document.querySelector()"](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector) e o [seletor CSS de atributos](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors) para obter o próximo elemento de célula pelos índices que denominou via atributos de dados.)
</li>

<h2>Requisitos</h2>

<ol>
<li>O jogador deve começar no quadrado inicial.</li>
<li>Configure um ou mais handlers de evento para mover seu DIV de jogador da mesma forma que fez nas avaliações anteriores sobre eventos de teclado.</li>
<li>Não permita que o jogador atravesse uma parede ou saia dos limites do labirinto.</li>
<li>Quando o jogador se mover para o quadrado final, mostre ao usuário que ele venceu (não use console.log ou alertas para isso).</li>
</ol>

<h2>Para um desafio extra</h2>

Adicione [animações CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS/animation) para permitir que os jogadores se movam suavemente de uma célula para outra.

Você pode adicionar os seguintes atributos CSS ao DIV que representa o jogador:

```
animation-duration: 100ms;

```

Você pode criar classes com animações CSS3 associadas representando as direções de movimento, por exemplo:

```
@keyframes slideRight {
from {margin-left: -33px;}
to {margin-left: 0;}
}
.slideRight {animation-name: slideRight;}
```

Você pode precisar remover a classe associada à animação anterior antes de poder adicioná-la de volta e executá-la novamente. Você pode achar útil usar [window.setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) para especificar uma função para remover as classes de animação (depois de permitir um timeout suficiente para que a animação seja concluída).

<h2>Envio</h2>

Adicione grupo <em>ka-br-<sua-turma>-correcoes</em> como membro do seu projeto com a permissão "Reporter", e envie a url do seu gitlab pages (Ex: https://nomedeusuario.gitlab.io/labirinto).