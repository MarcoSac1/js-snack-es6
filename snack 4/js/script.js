// // SNACK 4
// // Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// // Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const squad = [
    {
        nome : 'inter',
        puntifatti :' 0',
        fallisubiti : '0'
    },
    {
        nome : 'milan',
        puntifatti :' 0',
        fallisubiti : '0'
    },
    {
        nome : 'bologna',
        puntifatti :' 0',
        fallisubiti : '0'
    },
    {
        nome : 'lazio',
        puntifatti :' 0',
        fallisubiti : '0'
    },
    {
        nome : 'roma',
        puntifatti :' 0',
        fallisubiti : '0'
    },
];


squad.forEach((squad) => {
    squad.puntifatti = Math.floor((Math.random() * 100) +1);
    squad.fallisubiti = Math.floor((Math.random() * 100) +1);
    
})

squad.forEach((element) => {
    const {nome, fallisubiti, puntifatti} = element;
});

console.log(squad);

