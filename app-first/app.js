var mvcApp = angular.module('firstApp', []);

mvcApp.controller('firstController', function firstController($scope) {

  $scope.people = [
    {name:'Marcelo', state: 'RS'},
    {name:'Carlos', state: 'SC'}
  ];

});
