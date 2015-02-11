'use strict';

/**
 * @ngdoc overview
 * @name testyeomanApp
 * @description
 * # testyeomanApp
 *
 * Main module of the application.
 */


angular
    .module('testyeomanApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'LocalStorageModule',
        'ngMaterial',
        'ui.router',
        'underscore',
        'demo'
    ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }])
