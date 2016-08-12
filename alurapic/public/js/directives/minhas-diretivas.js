angular.module('minhasDiretivas', []).directive('meuPainel', function () {

    //ddo = direct definition object
    var ddo = {};

    ddo.restrict = "AE"; // A = atributte, E = element
    ddo.scope = {
        //passando dado para dentro do scopo privado da diretiva
        titulo: '@titulo'
    };

    ddo.transclude = true; //para diretiva manter os elementos filhos

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;

}).directive('minhaFoto', function () {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;
});