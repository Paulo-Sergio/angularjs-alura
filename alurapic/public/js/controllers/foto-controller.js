angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            //se tiver _id é pq eu quero alterar put()
            if ($scope.foto._id) {
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                        .success(function () {
                            $scope.mensagem = "A foto " + $scope.foto.titulo + " foi alterada com sucesso";
                        })
                        .error(function (err) {
                            console.log(err);
                            $scope.mensagem = "Não foi possivel alterar a foto " + $scope.foto.titulo;
                        });
            } else {
                $http.post('v1/fotos', $scope.foto)
                        .success(function () {
                            $scope.foto = {};
                            $scope.mensagem = "Foto incluida com sucesso";
                        })
                        .error(function (err) {
                            $scope.mensagem = "Não foi possivel incluir a foto";
                            console.log(err);
                        });
            }
        }

    };

    if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
                .success(function (foto) {
                    $scope.foto = foto;
                })
                .error(function (err) {
                    console.log(err);
                    $scope.mensagem = "Não foi possivel obter a foto";
                });
    }

});