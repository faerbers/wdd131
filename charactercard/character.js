const characterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    attack: function () {
        
        this.health = this.health - 20;
        if (this.health < 0) {
          this.health = 0;
        }

    },
    levelUp: function () {
        this.level++;
    }
};

        //Adding to HTML
document.querySelector('.name').textContent = characterCard.name;
document.querySelector('#class').textContent = characterCard.class;
document.querySelector('#level-number').textContent = characterCard.level;
document.querySelector('#health-number').textContent = characterCard.health;


// Select the elements we need for level-up
const levelUpButton = document.querySelector('.buttons button:nth-child(2)');
const levelDisplay  = document.querySelector('#level-number');

// When button is clicked → increase level and update screen
levelUpButton.addEventListener('click', function() {
    characterCard.levelUp();
    levelDisplay.textContent = characterCard.level;
});

        //Health
let currentHealth = characterCard.health;
const attackButton = document.querySelector('.buttons button:first-child');
const healthDisplay = document.querySelector('#health-number');

attackButton.addEventListener('click',function() {
    characterCard.attack();
    healthDisplay.textContent = characterCard.health;
        if (characterCard.health <= 0) {
            alert("Charater Died");
        }    
});

