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
        peso :'7.7'
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


// const {peso} = bike;
// console.log(peso)

// console.log(lightBike);

// bike.forEach((element) => {
//     if (bike[element].peso < lightBike[element].peso) {
        
//     }
    
//     console.log(`${element.nome} - ${element.peso}`);
// });


// console.log(bike);

const {nome, peso} = bike;

let lightBike = bike[0].peso; 

for (let index = 0; index < bike[index]; index++) {
    if(bike[index].peso > lightBike[index].peso){

    }
    
};
console.log(lightBike);

