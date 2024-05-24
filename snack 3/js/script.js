// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal


const bike = [
    {
        nome : 'S-Works Tarmac SL8', 
        peso :'6.5'
    },
    {
        nome : 'Aeroad CFR Di2', 
        peso :'7.5'
    },
    {
        nome : 'REACTO 8000', 
        peso :'7.9'
    },
    {
        nome : 'belador-8', 
        peso :'7.7KG'
    },
    {
        nome : 'TCR Advanced SL 0 DA', 
        peso :'6.2'
    },
];


// let lightBike = bike.filter((element) =>{
//     if (element.peso < element.peso) {
        
//     }
// });


let lightBike = 0;

console.log(lightBike);

bike.forEach((element) => {
    lightBike +=element.peso
});

console.log(` ${lightBike.nome}- ${lightBike.peso}`);