const characterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100
};

        //Adding to HTML
const nameElement   = document.querySelector('.name');
const classElement  = document.querySelector('#class');
const levelElement  = document.querySelector('#level-number');
const healthElement = document.querySelector('#health-number');

// Put the values where they belong
if (nameElement) {
    nameElement.textContent = characterCard.name;
}

if (classElement) {
    classElement.innerHTML = `<strong>Class:</strong> ${characterCard.class}`;
}

if (levelElement) {
    levelElement.textContent = characterCard.level;
}

if (healthElement) {
    healthElement.textContent = characterCard.health;
}

        //LEVEL
// State – keep track of the current level (starts from the card's value)
let currentLevel = characterCard.level;

// Select the elements we need for level-up
const levelUpButton = document.querySelector('.buttons button:nth-child(2)');
const levelDisplay  = document.querySelector('#level-number');

// Optional: safety check (good habit)
if (!levelUpButton) {
    console.error("Level Up button not found");
}
if (!levelDisplay) {
    console.error("Level display span not found");
}

// When button is clicked → increase level and update screen
levelUpButton.addEventListener('click', () => {
    currentLevel = currentLevel + 1;          // or shorter: currentLevel += 1;
    levelDisplay.textContent = currentLevel;  // no need for template literal here
    // Optional: also update the meta title if you want
    // document.title = `Snortleblat - level ${currentLevel} Swamp Beast Diplomat`;
});

        //Health
let currentHealth = characterCard.health;
const attackButton = document.querySelector('.buttons button:first-child');
const healthDisplay = document.querySelector('#health-number');

attackButton.addEventListener('click', () => {
    currentHealth = currentHealth - 20;
    if (currentHealth < 0) {
          currentHealth = 0;
    }
    healthDisplay.textContent = currentHealth;
    if (currentHealth <= 0) {
        alert("Charater Died");
    }
});