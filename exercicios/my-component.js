angular.module('myApp')
.component('myComponent', {
    templateUrl : 'myComponent.html',
    controller : myComponentController,
    bindings : {
        text : '<',
        myFunc : '='
    },
    transclude : true
})

function myComponentController(){
    var vm = this;
    vm.onChange = function(){
        console.log("Teste de mensagem", vm.text);
        vm.myFunc(vm.text);
    }
}