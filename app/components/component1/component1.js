(function () {
    'use strict';

    var component1Module = angular.module("component1Module", []);

    function component1Controller() {
        this.title = 'Default title for component 1';

        this.setTitle = function () {
            return this.title = 'a new title';
        }
    }

    component1Module.component('component1', {
        template: require('./component1.html'),
        controller: component1Controller,
        controllerAs: 'component1'
    })

}());
