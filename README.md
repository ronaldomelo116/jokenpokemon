# 🎮 Pokémon Jokenpô Arena

Um jogo clássico de Pedra, Papel e Tesoura, reimaginado como uma emocionante batalha Pokémon! Desenvolvido com HTML, CSS e JavaScript puro, este projeto consome a **PokéAPI** para sortear dinamicamente diferentes Pokémon a cada rodada, trazendo uma experiência nostálgica com estética pixel art 8-bit.

---

## 🚀 Funcionalidades

- **Integração com PokéAPI:** Os personagens não são imagens estáticas. O JavaScript realiza requisições assíncronas (`fetch/async await`) para a API oficial do Pokémon, garantindo variedade nas batalhas.
- **Sorteio Aleatório:** Cada tipo possui uma extensa lista de Pokémon (30+ por categoria). Um representante diferente é sorteado a cada rodada.
- **Nome do Pokémon nos botões:** O nome do Pokémon sorteado aparece embaixo da imagem em cada botão.
- **Lógica de Tipos:** A clássica mecânica do Jokenpô adaptada para o universo Pokémon:
  - 🔥 **Fogo** queima 🌿 Planta
  - 🌿 **Planta** absorve 💧 Água
  - 💧 **Água** apaga 🔥 Fogo
- **Modal de Resultado:** Exibe os Pokémon do jogador vs. da máquina com animação de derrota (`@keyframes`) no perdedor.
- **Modal de Regras:** Botão ❓ no canto superior do container abre as regras do jogo para o usuário consultar a qualquer momento.
- **Sistema de Placar:** Pontuação atualizada em tempo real para o jogador e para a máquina.
- **Interface Responsiva:** Layout e background adaptados automaticamente para mobile (9:16) e desktop.
- **PWA Ready:** Inclui `site.webmanifest` configurado para instalação como app na tela inicial do celular.
- **Efeitos Sonoros 8-bit:** Sons de clique, vitória, derrota e empate para uma experiência imersiva.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica, modais e footer |
| **CSS3** | Estilização, animações `@keyframes`, `clamp()`, media queries e responsividade |
| **JavaScript ES6+** | Lógica do jogo, DOM, Async/Await e consumo de API |
| **PokéAPI** | Sprites e dados dos Pokémon |
| **Bootstrap Icons** | Ícones do modal de regras e footer |
| **Web Manifest** | Configuração de PWA para instalação como app |

---

## 📁 Estrutura do Projeto

```text
jokenpokemon/
│
├── index.html              # Estrutura principal da página
├── script.js               # Lógica do jogo e integração com a API
├── style.css               # Estilos, animações e responsividade
├── site.webmanifest        # Configuração PWA
├── README.md               # Documentação do projeto
│
├── assets/
│   └── img/
│       ├── background.jpeg         # Arena de batalha (Desktop)
│       ├── background-9por16.jpeg  # Arena de batalha (Mobile)
│       ├── favicon.png             # Favicon principal
│       ├── favicon-16x16.png       # Favicon 16x16
│       ├── favicon-32x32.png       # Favicon 32x32
│       └── apple-touch-icon.png    # Ícone para iOS
│
└── sounds/
    ├── click.mp3           # Som de clique nos botões
    ├── win.mp3             # Som de vitória
    ├── lose.mp3            # Som de derrota
    └── empate.mp3          # Som de empate
```

---

## 🕹️ Como Jogar

1. Clone o repositório ou baixe os arquivos
2. Abra o `index.html` no navegador (sem necessidade de servidor)
3. A PokéAPI carregará automaticamente os três desafiantes da rodada
4. Clique no botão ❓ para ver as regras
5. Escolha seu tipo: 🔥 Fogo, 💧 Água ou 🌿 Planta
6. A máquina faz a escolha aleatoriamente
7. O modal exibe o resultado — o perdedor cai com animação!
8. O placar é atualizado e novos Pokémon são sorteados para a próxima rodada

---

## 🌐 PokéAPI

Este projeto utiliza a [PokéAPI](https://pokeapi.co/) — uma API pública, gratuita e sem necessidade de autenticação.

**Endpoint utilizado:**
```
GET https://pokeapi.co/api/v2/pokemon/{nome}
```

**Pokémon disponíveis por tipo:**
- 🔥 **Fogo:** 30+ Pokémon (Gens 1–9)
- 💧 **Água:** 35+ Pokémon (Gens 1–8)
- 🌿 **Planta:** 35+ Pokémon (Gens 1–9)

---

## 👨‍💻 Autor

Desenvolvido por **Ronaldo Mello** — desenvolvedor web em formação com foco em Front-end e Full-stack, apaixonado por construir aplicações dinâmicas e pela estética retro 8-bit.

[![GitHub](https://img.shields.io/badge/GitHub-ronaldomelo116-black?logo=github)](https://github.com/ronaldomelo116/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ronaldo%20Mello-blue?logo=linkedin)](https://www.linkedin.com/in/ronaldo-melo-de-oliveira/)
[![Instagram](https://img.shields.io/badge/Instagram-ronalldo.mello-purple?logo=instagram)](https://instagram.com/ronalldo.mello/)

---

© 2026 Ronaldo Mello. Todos os direitos reservados.
