'use strict';

/**
 * @ngdoc overview

 * @description

 * Main module of the application.
 */


angular
    .module('testApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'

        })

        
            .otherwise({
                redirectTo: '/home'
            });
    });

