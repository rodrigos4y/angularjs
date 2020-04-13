angular.module('pokedexApp')
.factory('PokeApiFactory', PokeApiFactory);

function PokeApiFactory(){
    return {
        pkmList : [
            {name : 'Bulbasaur', number  :'001'},
            {name : 'Pikachu', number  :'025'},
            {name : 'Mew', number  :'151'},
            {name : 'Chikorita', number  :'152'},
            {name : 'Celebi', number  :'251'},
        ]
    }
}