"use babel";

// variable con un modulo
let app = angular.module('app', []); 

app.controller('ctrlMain', function(rest){
	
var dg = this; //this accede a un scope que es el mismo this que ayuda al bindeo
dg.resultado = 0; //se define una variable

	dg.calcular = function(num1, num2){ //se crea una función que recibe dos parametros, num1 y num2 
		dg.resultado = num1 * num2;

	}




dg.multiplicar = function(numero){

dg.datos =[]; //array que va a contener los objetos

var limite = 10; //cantidad de multiplicaciones q va a realizar

for (var i = 0; i <= limite; i++) {

dg.datos.push({"a":numero, "b":i, "c":numero*i}); //en el array se coloca en numero que se recibe de la función, la variable de la iteracion 
//y la multiplicación de la iteracion con el numero que se recibe.
//asignando un caracter a cada variable

}



}


















	// $scope.saluda = "Hola mundo";

	// $alex.hola="Hola mundo Alex";

	// $scope.myFuncion = function(){
	// 	console.log("this ");
	// 	rest.absData().then(function(res){
	// 		$scope.informacion = res;
	// 	})
	// }


})

.service('rest', function($http){
	var obj = {};

	obj.absData = function(){
        return $http.post('https://casacolombiana.com/api/v1/getMyApi').then(function(res){ return res.data})
    }

    return obj;

});