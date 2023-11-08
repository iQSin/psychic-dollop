

const info = [
{names: "Kaffe", price : 3, stock: 100},
{names: "Munk", price: 3.5, stock: 15, } ,
{names: "Glass", price: 4, stock: 45}
]

info[1].price = 5;

console.log(`En ${info[0].names} kostar ${info[0].price}, vi har ${info[0].stock} st`);
console.log(`En ${info[1].names} kostar ${info[1].price}, vi har ${info[1].stock} st`);
console.log(`En ${info[2].names} kostar ${info[2].price}, vi har ${info[2].stock} st`);