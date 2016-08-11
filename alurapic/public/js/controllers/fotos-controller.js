angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.fotos = []

//1ª FORMA 
//    var promise = $http.get('v1/fotos');
//    promise.then(function(dados) {
//        $scope.fotos = dados.data;
//    }).catch(function(error){
//        console.log(error);
//    });

//2ª FORMA (mais usado eu acho)
//    $http.get('v1/fotos')
//            .then(function (dados) {
//                $scope.fotos = dados.data;
//            }, function(err){
//                console.log(err);
//            });

//3ª FORMA (mais simplificada)
    $http.get('v1/fotos')
            .success(function (fotos) {
                $scope.fotos = fotos;
            })
            .error(function (err) {
                console.log(err);
            });

});