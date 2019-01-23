(function () {
    'use strict';

    var component2Module = angular.module("component2Module", []);

    function component2Controller() {
    }

    component2Module.component('component2', {
        template: require('./component2.html'),
        controller: component2Controller
    })

}());
