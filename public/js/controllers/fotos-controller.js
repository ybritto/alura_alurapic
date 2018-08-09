angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = "";

	$http.get('v1/fotos').success(function(retorno){
		$scope.fotos = retorno;
	}).error(function(error){
		console.log(error);
	});

	$scope.remover = function(foto) {
		console.log('remover foto:');
		console.log(foto);

		$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		})
		.error(function(error){
			console.log(error);
			$scope.mensagem = 'Não foi possivel remover a foto: ' + foto.titulo;
		});

	}

});