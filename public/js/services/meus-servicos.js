angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){


	return $resource('v1/fotos/:fotoId', null, {
		'update': {
			method: 'PUT'
		}
	});

})
.factory('cadastroDeFotos', function(recursoFoto, $q){


	var service = {};

	service.cadastrar = function(foto) {

		return $q(function(resolve, reject){

			if (foto._id) {

				recursoFoto.update({fotoId : foto._id}, foto, function(){
					resolve({
						mensagem : 'Foto ' + foto.titulo + ' atualizada com sucesso',
						inclusao : false 
					})
				}, function(error){
					console.log(error);
					reject({
						mensagem: 'Não foi possivel atualizar a foto ' + foto.titulo,
						inclusao: false
					})
				});

			} else {

				recursoFoto.save(foto, function(){
					resolve({
						mensagem : 'Foto' + foto.titulo + ' cadastrada com sucesso',
						inclusao : true
					})
				}, function(error){
					console.log(error);
					reject({
						mensagem : 'Não foi possivel cadastrar a foto ' + foto.titulo,
						inclusao: true
					})
				});

			}


		})

	}

	return service;

});