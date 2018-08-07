angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos = [];
	$scope.filtro = '';

	$http.get('http://localhost:3000/v1/fotos').success(function(retorno){
		console.log(retorno);
		$scope.fotos = retorno;
	}).error(function(error){
		console.log(error);
	});

});