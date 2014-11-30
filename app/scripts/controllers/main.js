'use strict';

/**
 * @ngdoc function
 * @name tpplanningPokerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tpplanningPokerApp
 */
angular.module('tpplanningPokerApp')
  .controller('MainCtrl', function ($scope,Restangular) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.submit = function() {
  	Restangular.setBaseUrl('https://neworbit.tpondemand.com/api/v1/');
  	var encoded = 'a2h1bnRlckBuZXdvcmJpdC5jby51azpiNTZUdjhVdg==';
  	Restangular.setDefaultHeaders({'Authorization': 'Basic ' + encoded });
  	Restangular.setDefaultHttpFields({withCredentials: true});
  	Restangular.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
      var baseAccounts = Restangular.all('Context/');
      
      baseAccounts.getList().then(function(accounts) {
        $scope.allAccounts = accounts;
        });
      };

  });
