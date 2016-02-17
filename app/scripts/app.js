'use strict';

/**
 * @ngdoc overview
 * @name bootstrapSampleAppApp
 * @description
 * # bootstrapSampleAppApp
 *
 * Main module of the application.
 */
(function(){
  angular
  .module('bootstrapSampleAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})()

