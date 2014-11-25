'use strict';

/**
 * @ngdoc overview
 * @name tpplanningPokerApp
 * @description
 * # tpplanningPokerApp
 *
 * Main module of the application.
 */
angular
  .module('tpplanningPokerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
