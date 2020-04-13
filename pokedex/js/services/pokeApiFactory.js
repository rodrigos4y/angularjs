angular.module('pokedexApp')
.factory('PokeApiFactory', PokeApiFactory);

function PokeApiFactory(){
    return {
        pkmList : [
            {name : 'Bulbasaur', number  : 1},
            {name : 'Pikachu', number  : 25},
            {name : 'Mew', number  : 151},
            {name : 'Chikorita', number  : 152},
            {name : 'Celebi', number  : 251},
        ]
    }
}