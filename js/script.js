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