let restoran = 'shanyraq';
const soccerteam = 'zhetisu';
let players = 11;
let allareavailable = true;
let manager;
const investor = null;
console.log(restoran, soccerteam, players, allareavailable, manager);

let vehicle = {
    
}
vehicle.brandName = 'BMW';
vehicle.model = 'X5';
vehicle.model = 'M1';
delete vehicle.model;
console.log(vehicle);

let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}

let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
console.log(sum);