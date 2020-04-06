angular.module('pokedexApp')
.component('pokeListItemComponent', {
    templateUrl : './js/components/pokeListItem/pokeListItemComponent.html',
    controller : pokeListItemController,
    bindings : {
        pkm : '='
    }
})

function pokeListItemController(){

}