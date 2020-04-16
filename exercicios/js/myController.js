angular
.module('myApp')
.controller('myController', myController);

myController.$inject = ['$http'];

function myController($http)
{
    var vm = this;
    vm.title = 'Hello World!';
    vm.repositories = [];
    vm.cursos = [];

    vm.print = function(value){
        console.log(value);
    }

    $http({
        'method' : 'GET',
        'url' : 'https://rdfreitas.com.br/json/cursos.json'
    })
    .then(function(response){
        vm.cursos = response.data.certificados;
    })

    
}