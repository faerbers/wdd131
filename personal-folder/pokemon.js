const starters = [{
        name: 'Browt',
		image: 'images/browt.webp',
        category: 'Bean Chick Pokemon',
        type: 'Grass',
        height:  '1\'',  
        weight: '7.7lbs', 
        ability: 'Overgrow',
        overview: 'This Pokémon runs about energetically while photosynthesizing using the leaves on its brow. It\'s lively,but it can also be a bit clumsy.'
    },
{		name: 'Pombon', 
		image: 'images/pombon.webp',
		category: 'Puppy Pokemon',
		type: 'Fire',
		height: '1\'4\'\'',
		weight: '14.8lbs',
		ability: 'Blaze',
		overview:'The area below its throat glows faintly from the heat-generating organ within its lungs. This Pokémon is guileless and friendly.'
    },
{			
	    name: 'Gecqua',
		image: 'images/gecqua.webp',
		category: 'Water Gecko Pokemon',
		type: 'Water',
		height: '1\'',
		weight: '9.5lbs',
		ability: 'Torrent',
		overview: 'This Pokémon launches springy balls of water from its tail. Gecqua is very intelligent and maneuvers shrewdly while putting on airs.'
    }
];


function starterTemplate(pokemon) {
	return `<img src="${pokemon.image}" alt="pokeball">
            <h3>${pokemon.name}</h3>
            <ul>
                <li>Category: ${pokemon.category}</li>
                <li>Type: ${pokemon.type}</li>
                <li>Height: ${pokemon.height}</li>
                <li>Weight: ${pokemon.weight}</li>
                <li>Ability: ${pokemon.ability}</li>
                <li>Overview: ${pokemon.overview}</li>
            </ul>`
}


document.addEventListener('DOMContentLoaded', () => {
    
    const pokeballDiv = document.querySelector('.pokeball');
    const basicPokeball = document.getElementById('basic-pokeball');
    
    const grassBtn = document.querySelector('#grass');
    const fireBtn = document.querySelector('#fire');
    const waterBtn = document.querySelector('#water');

    function showStarter(pokemon) {
        basicPokeball.style.display = 'none';     
        pokeballDiv.innerHTML = starterTemplate(pokemon);
    }

    const buttons = [
        { btn: grassBtn, type: 'Grass' },
        { btn: fireBtn,  type: 'Fire' },
        { btn: waterBtn, type: 'Water' }
    ];

    buttons.forEach(item => {
        item.btn.addEventListener('click', () => {
            const pokemon = starters.find(p => p.type === item.type);
            showStarter(pokemon);
        });
    });
});