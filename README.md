# 🎮 Pokémon Jokenpô Arena

Um jogo clássico de Pedra, Papel e Tesoura, reimaginado como uma emocionante batalha Pokémon! Desenvolvido com HTML, CSS e JavaScript, este projeto consome a **PokéAPI** para sortear dinamicamente diferentes Pokémon a cada rodada, trazendo uma experiência nostálgica com estética pixel art 16-bit.

## 🚀 Funcionalidades

*   **Integração com PokéAPI:** Os personagens não são imagens estáticas locais. O JavaScript realiza requisições assíncronas (`fetch`) para a API oficial do Pokémon, garantindo variedade nas batalhas.
*   **Sorteio Aleatório:** Cada tipo (Fogo, Água e Planta) possui uma lista (array) de possíveis Pokémon. O jogo sorteia um representante diferente de cada tipo a cada carregamento.
*   **Lógica de Tipos:** A clássica mecânica do Jokenpô foi adaptada para o universo Pokémon:
    *   🔥 **Fogo** queima Planta.
    *   🌿 **Planta** absorve Água.
    *   💧 **Água** apaga Fogo.
*   **Interface Imersiva e Responsiva:** Utiliza fundos de arena de batalha em pixel art. O CSS adapta automaticamente o layout e o background para uma versão vertical (9:16) em dispositivos móveis e horizontal em desktops.
*   **Sistema de Placar:** Pontuação atualizada em tempo real para o jogador e para a máquina.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica da página e modais de resultado.
*   **CSS3:** Estilização, animações (`@keyframes`), transições de hover/active e *media queries* para responsividade.
*   **JavaScript (ES6+):** Lógica de vitória, manipulação do DOM e consumo de API (Async/Await).
*   **PokéAPI:** API RESTful utilizada para obter os sprites frontais dos Pokémon.

## 📁 Estrutura do Projeto

```text
pokemon-jokenpo/
│
├── index.html          # Estrutura principal da página
├── script.js           # Lógica do jogo e integração com a API
├── style.css           # Estilos e responsividade
├── README.md           # Documentação do projeto
└── assets/
    └── img/
        ├── background.png          # Arena de batalha (Desktop)
        ├── background-9por16.png   # Arena de batalha (Mobile)
        └── favicon.svg             # Ícone da aba do navegador
```
--------------------------------------------------------------------


## 🕹️ Como Jogar
* Faça o clone deste repositório ou baixe os arquivos.

* Abra o arquivo index.html no seu navegador (não é necessária nenhuma instalação ou servidor local).

* A PokéAPI carregará os três desafiantes da rodada.

* Clique no seu tipo favorito (Fogo, Água ou Planta).

* A máquina fará a escolha dela aleatoriamente.

* O modal exibirá o resultado da batalha e o placar será atualizado!

👨‍💻 Autor
Desenvolvido por Ronaldo Melo, desenvolvedor web em formação com foco em Front-end e Full-stack, apaixonado por construir aplicações dinâmicas e pela estética retro 16-bit.
