angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
        .config(function ($routeProvider, $locationProvider) {

            /* para suportar a url sem #
             * html5Mode(false): http://localhost:3000/#/fotos
             * html5Mode(true): http://localhost:3000/fotos
             */
            $locationProvider.html5Mode(true);

            $routeProvider.when('/fotos', {
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            });
            
            $routeProvider.when('/fotos/new', {
                templateUrl: 'partials/foto.html'
            });
            
            $routeProvider.otherwise('/fotos');

        });