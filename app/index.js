require('./components/component1/component1');
require('./components/component2/component2');

(function () {
    'use strict';
    
    /**
     * @ngdoc overview
     * @name ecoCoreModule
     *
     * @description
     * This is the main module for the application.
     */
    angular.module('app', [
        'component1Module',
        'component2Module'
    ]);
  
}());
