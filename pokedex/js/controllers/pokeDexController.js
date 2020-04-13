angular.module('pokedexApp')
.controller('PokeDexController', PokeDexController);

PokeDexController.$inject = ['PokeApiFactory'];

function PokeDexController(PokeApiFactory){
    var vm = this;
    vm.searchText = '';
    vm.pkmList = PokeApiFactory.pkmList;
}