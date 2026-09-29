const result = document.querySelector('.result');
const yourScore = document.querySelector('#youcore');
const machineScore = document.querySelector('#machinecore');
const modal = document.querySelector('#modal');
const modalResult = document.querySelector('#modal-result');
const imgHuman = document.querySelector('#img-human');
const imgMachine = document.querySelector('#img-machine');
const modalPlayer = document.querySelector('#modal-player');
const modalMachine = document.querySelector('#modal-machine');
const btnClose = document.querySelector('#modal-close');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Listas de vários Pokémon para sortear (você pode adicionar mais nomes se quiser!)
const pokemonsFogo = ['charmander', 'vulpix', 'growlithe', 'ponyta', 'magmar', 'flareon', 'cyndaquil', 'houndour', 'torchic', 'chimchar', 'tepig', 'fennekin', 'litten'];
const pokemonsAgua = ['squirtle', 'psyduck', 'poliwag', 'tentacool', 'slowpoke', 'seel', 'shellder', 'krabby', 'horsea', 'magikarp', 'vaporeon', 'totodile', 'marill', 'mudkip', 'piplup'];
const pokemonsPlanta = ['bulbasaur', 'oddish', 'bellsprout', 'exeggcute', 'tangela', 'chikorita', 'hoppip', 'sunkern', 'treecko', 'seedot', 'shroomish', 'roselia', 'turtwig', 'snivy', 'chespin'];

// Objeto para armazenar o Pokémon sorteado da rodada atual
const pokemonData = {
    fogo: { nome: '', sprite: '' },
    agua: { nome: '', sprite: '' },
    planta: { nome: '', sprite: '' }
};

// Função para capitalizar a primeira letra do nome do Pokémon
const capitalizarNome = (nome) => nome.charAt(0).toUpperCase() + nome.slice(1);

// Função que escolhe um Pokémon aleatório da lista
const sortearPokemon = (lista) => lista[Math.floor(Math.random() * lista.length)];

// Função assíncrona para sortear e buscar as imagens na API
async function loadPokemonSprites() {
    // Sorteia quem serão os representantes de Fogo, Água e Planta desta vez
    pokemonData.fogo.nome = sortearPokemon(pokemonsFogo);
    pokemonData.agua.nome = sortearPokemon(pokemonsAgua);
    pokemonData.planta.nome = sortearPokemon(pokemonsPlanta);

    for (const tipo in pokemonData) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonData[tipo].nome}`);
            const data = await response.json();
            
            // Pega a imagem (sprite) e guarda
            const imageUrl = data.sprites.front_default;
            pokemonData[tipo].sprite = imageUrl;

            // Altera a imagem do botão correspondente na tela
            const imgBtn = document.getElementById(`img-btn-${tipo}`);
            if(imgBtn) {
                imgBtn.src = imageUrl;
                imgBtn.alt = capitalizarNome(pokemonData[tipo].nome);
            }
        } catch (error) {
            console.error(`Erro ao buscar o Pokémon ${pokemonData[tipo].nome}:`, error);
        }
    }
}

// Inicia o sorteio quando a página abre
loadPokemonSprites();

const closeModal = () => {
    modal.classList.remove('ativo');
    modalPlayer.classList.remove('perdedor');
    modalMachine.classList.remove('perdedor');
    
  loadPokemonSprites(); 
}
btnClose.addEventListener('click', closeModal);

const openModal = (human, machine, winner) => {
    imgHuman.src = pokemonData[human].sprite;
    imgMachine.src = pokemonData[machine].sprite;

    if (winner === 'empate') {
        modalResult.textContent = 'Deu empate!';
        modalResult.style.color = 'blue';
    } else if (winner === 'humano') {
        modalResult.textContent = 'Você ganhou!';
        modalResult.style.color = 'green';
        modalMachine.classList.add('perdedor');
    } else {
        modalResult.textContent = 'Você perdeu!';
        modalResult.style.color = 'red';
        modalPlayer.classList.add('perdedor');
    }
    modal.classList.add('ativo');
}

const playMachine = () => {
    const choices = ['fogo', 'agua', 'planta'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    const nomeHumano = capitalizarNome(pokemonData[human].nome);
    const nomeMaquina = capitalizarNome(pokemonData[machine].nome);

    if (human === machine) {
        openModal(human, machine, 'empate');
        result.innerHTML = `Deu empate! Dois ${nomeHumano} anularam-se.`;
        result.style.color = 'blue';
    } else if (
        (human === 'fogo' && machine === 'planta') ||
        (human === 'planta' && machine === 'agua') ||
        (human === 'agua' && machine === 'fogo')
    ) {
        openModal(human, machine, 'humano');
        result.innerHTML = `Vitória! O seu ${nomeHumano} venceu o ${nomeMaquina}!`;
        result.style.color = 'green';
        humanScoreNumber++;
        yourScore.innerHTML = humanScoreNumber;
        yourScore.style.color = 'green';
    } else {
        openModal(human, machine, 'maquina');
        result.innerHTML = `Derrota! O ${nomeMaquina} inimigo venceu o seu ${nomeHumano}.`;
        result.style.color = 'red';
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        machineScore.style.color = 'red';
    }
}

const playHuman = (playChoice) => {
    playTheGame(playChoice, playMachine());
};
