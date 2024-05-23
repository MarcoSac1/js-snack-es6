const vipArray = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

let invited = [];


vipArray.forEach((vipArray, index) => {
    let table = {};
    table.tableName = 'Tavolo Vip';
    table.guestName = vipArray ;
    table.place = index + 1;

    invited.push(table);
});

console.log(invited);



const studentArray = [
    {
        Id : '213',
        name : 'Giuseppina della Rovere',
        grades : '78',
    },
    {
        Id : '110',
        name : 'Paola Cortellessa',
        grades : '96',
    },
    {
        Id : '250',
        name : 'Andrea Mantegna',
        grades : '48',
    },
    {
        Id : '145',
        name : 'Gaia Borromini',
        grades : '74',
    },
    {
        Id : '196',
        name : 'Luigi Grimaldello',
        grades : '68',
    },
    {
        Id : '103',
        name : 'Piero della Francesca',
        grades : '50',
    },
    {
        Id : '120',
        name : 'Francesca da Polenta',
        grades : '84',
    },
];

// const NameUpper = ['GIUSEPPINA DELLA ROVERE', 'PAOLA CORTELLESSA', 'ANDREA MANTEGNA', 'GAIA BORROMINI', 'LUIGI GRIMALDELLO', 'PIERO DELLA FRANCESCA', 'FRANCESCA DA POLENTA'];



// const nameUpper = studentArray.filter((element) =>{
//     if (element.name === 'name') {
//         nameUpper.push(element.toUpperCase())
//         console.log(element);
//     }
// })
let student70plus = studentArray.filter((element) => {
    
});

let id120olus = [];

const nameUpper = [];

// for (let index = 0; index < studentArray.length; index++) {
    
//     if ( ) {
//         nameUpper.push.toUpperCase()
//     }
// };
// console.log(nameUpper);