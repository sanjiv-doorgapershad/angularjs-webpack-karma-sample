require('../../core/services/date-service');

(function () {
    'use strict';

    var component2Module = angular.module('component2Module', ['dateServiceModule']);

    function component2Controller(DateService) {

        this.$onInit = () => {
            this.date = DateService.currentDate();
        }
    }

    component2Module.component('component2', {
        template: require('./component2.html'),
        controller: ['DateService', component2Controller]
    })

}());
