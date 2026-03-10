nums = [12, 10, 8, 3];

console.log(nums.sort(compareFn));


//needed for sorting numbers and objects
function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}
                

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts",
     "broccoli", "mango"];
                
let simpleSort = simpleList.sort();

console.log(simpleSort);

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

let searchTerm = 'co';

let filterFruit = lowerSort.filter(searchFruit);

//.includes() searches for X in ()s
function searchFruit(item){
    return item.includes(searchTerm);
}

console.log(filterFruit);

function compareFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

let productSort = products.sort(compareFn);
console.log(productSort)
                

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
              
let query = 'ox';
let filteredList = animals.filter(searchList);

//look at list name and lowercase it, and somewhere in name includes query 
//that's also lowercase, in case it was typed in upper
function searchList(item){
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList);

//filtering through traits

let queryTrait = 'wild';
let filteredTraits = animals.filter(searchTraits);

//=> goes through each trait, lowers it and sees it it matches query
function searchTraits(item){
    return item.traits.find((trait) => trait.toLowerCase().includes(queryTrait.toLowerCase()));
}

console.log (filteredTraits);