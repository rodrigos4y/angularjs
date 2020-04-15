angular
.module('myApp')
.controller('myController', myController);

myController.$inject = ['$http'];

function myController($http)
{
    var vm = this;
    vm.title = 'Hello World!';
    vm.repositories = [];

    vm.print = function(value){
        console.log(value);
    }

    $http({
        'method' : 'GET',
        'url' : 'https://api.github.com/search/repositories?q=angular'
    })
    .then(function(response){
        vm.repositories = response.data.items;
    })

    
}