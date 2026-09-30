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
const btnRules = document.querySelector('#btn-rules');
const modalRules = document.querySelector('#modal-rules');
const btnCloseRules = document.querySelector('#btn-close-rules');
const somClick = new Audio('sounds/click.ogg');
const somWin = new Audio('sounds/win.ogg');
const somLose = new Audio('sounds/lose.ogg');
const somDraw = new Audio('sounds/draw.ogg');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

btnRules.addEventListener('click', () => {
    modalRules.classList.add('ativo');
    somClick.currentTime = 0;
    somClick.play();
});

btnCloseRules.addEventListener('click', () => {
    modalRules.classList.remove('ativo');
    somClick.currentTime = 0;
    somClick.play();
});

// Listas de vários Pokémon para sortear
const pokemonsFire = [
    // Gen 1
    'charmander', 'vulpix', 'growlithe', 'ponyta', 'magmar', 'flareon',
    // Gen 2
    'cyndaquil', 'houndour', 'slugma',
    // Gen 3
    'torchic', 'numel', 'torkoal',
    // Gen 4
    'chimchar', 'magby',
    // Gen 5
    'tepig', 'pansear', 'darumaka', 'litwick', 'heatmor',
    // Gen 6
    'fennekin', 'fletchinder',
    // Gen 7
    'litten', 'salandit', 'turtonator',
    // Gen 8
    'scorbunny', 'sizzlipede',
    // Gen 9
    'fuecoco', 'capsakid'
];

const pokemonsWater = [
    // Gen 1
    'squirtle', 'psyduck', 'poliwag', 'tentacool', 'slowpoke',
    'seel', 'shellder', 'krabby', 'horsea', 'magikarp', 'vaporeon',
    // Gen 2
    'totodile', 'marill', 'wooper', 'remoraid',
    // Gen 3
    'mudkip', 'carvanha', 'wailmer', 'barboach', 'clamperl',
    // Gen 4
    'piplup', 'buizel', 'finneon',
    // Gen 5
    'oshawott', 'panpour', 'tympole', 'basculin',
    // Gen 6
    'froakie', 'skrelp', 'clauncher',
    // Gen 7
    'popplio', 'dewpider',
    // Gen 8
    'sobble', 'arrokuda'
];

const pokemonsPlant = [
    // Gen 1
    'bulbasaur', 'oddish', 'bellsprout', 'exeggcute', 'tangela',
    // Gen 2
    'chikorita', 'hoppip', 'sunkern', 'sudowoodo',
    // Gen 3
    'treecko', 'seedot', 'shroomish', 'roselia', 'cacnea',
    // Gen 4
    'turtwig', 'budew', 'cherubi', 'snover',
    // Gen 5
    'snivy', 'pansage', 'maractus', 'deerling', 'ferroseed',
    // Gen 6
    'chespin', 'skiddo', 'phantump',
    // Gen 7
    'rowlet', 'fomantis', 'bounsweet',
    // Gen 8
    'grookey', 'gossifleur',
    // Gen 9
    'sprigatito', 'smoliv'
];

// Objeto para armazenar o Pokémon sorteado da rodada atual
const pokemonDate = {
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
    pokemonDate.fogo.nome = sortearPokemon(pokemonsFire);
    pokemonDate.agua.nome = sortearPokemon(pokemonsWater);
    pokemonDate.planta.nome = sortearPokemon(pokemonsPlant);

    for (const tipo in pokemonDate) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonDate[tipo].nome}`);
            const data = await response.json();

            // Pega a imagem (sprite) e guarda
            const imageUrl = data.sprites.front_default;
            pokemonDate[tipo].sprite = imageUrl;

            // Altera a imagem do botão correspondente na tela
            const imgBtn = document.getElementById(`img-btn-${tipo}`);
            if (imgBtn) {
                imgBtn.src = imageUrl;
                imgBtn.alt = capitalizarNome(pokemonDate[tipo].nome);
            }

            const nameBtn = document.getElementById(`name-${tipo}`);
            if (nameBtn) {
                nameBtn.textContent = capitalizarNome(pokemonDate[tipo].nome);
            }

        } catch (error) {
            console.error(`Erro ao buscar o Pokémon ${pokemonDate[tipo].nome}:`, error);
        }
    }
}

// Inicia o sorteio quando a página abre
loadPokemonSprites();

const closeModal = () => {
    somClick.currentTime = 0;
    somClick.play();
    modal.classList.remove('ativo');
    modalPlayer.classList.remove('perdedor');
    modalMachine.classList.remove('perdedor');

    loadPokemonSprites();
}
btnClose.addEventListener('click', closeModal);

const openModal = (human, machine, winner) => {
    imgHuman.src = pokemonDate[human].sprite;
    imgMachine.src = pokemonDate[machine].sprite;

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
    const nomeHumano = capitalizarNome(pokemonDate[human].nome);
    const nomeMaquina = capitalizarNome(pokemonDate[machine].nome);

    if (human === machine) {
        somDraw.play();
        openModal(human, machine, 'empate');
        result.innerHTML = `Deu empate! Dois ${nomeHumano} anularam-se.`;
        result.style.color = 'blue';
    } else if (
        (human === 'fogo' && machine === 'planta') ||
        (human === 'planta' && machine === 'agua') ||
        (human === 'agua' && machine === 'fogo')
    ) {
        openModal(human, machine, 'humano');
        somWin.play();
        result.innerHTML = `Vitória! O seu ${nomeHumano} venceu o ${nomeMaquina}!`;
        result.style.color = 'green';
        humanScoreNumber++;
        yourScore.innerHTML = humanScoreNumber;
        yourScore.style.color = 'green';
    } else {
        openModal(human, machine, 'maquina');
        somLose.play();
        result.innerHTML = `Derrota! O ${nomeMaquina} inimigo venceu o seu ${nomeHumano}.`;
        result.style.color = 'red';
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        machineScore.style.color = 'red';
    }
}

const playHuman = (playChoice) => {
    playTheGame(playChoice, playMachine());
    somClick.currentTime = 0;
    somClick.play();
};

