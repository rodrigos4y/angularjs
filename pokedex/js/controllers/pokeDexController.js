angular.module('pokedexApp')
.controller('PokeDexController', PokeDexController);

function PokeDexController(){
    var vm = this;
    vm.searchText = '';
    vm.pkmList = [
        {name : 'Bulbasaur', number  :'001'},
        {name : 'Pikachu', number  :'025'},
        {name : 'Mew', number  :'151'},
        {name : 'Chikorita', number  :'152'},
        {name : 'Celebi', number  :'251'},
    ];
}