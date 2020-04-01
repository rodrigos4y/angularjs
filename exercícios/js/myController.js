angular
.module('myApp')
.controller('myController', myController);

function myController()
{
    var vm = this;
    vm.title = 'Hello World!';
}