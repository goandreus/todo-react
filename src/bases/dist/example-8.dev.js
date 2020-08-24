"use strict";

var _heroes = require("./data/heroes");

// const getHeroeById = (id) => {
//     return heroes.find((heroe) =>{
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
var getHeroeById = function getHeroeById(id) {
  return _heroes.heroes.find(function (heroe) {
    return heroe.id === id;
  });
};

console.log(getHeroeById(2));

var getHeroeByOwner = function getHeroeByOwner(owner) {
  return _heroes.heroes.filter(function (heroe) {
    return heroe.owner === owner;
  });
};

console.log(getHeroeByOwner('DC'));