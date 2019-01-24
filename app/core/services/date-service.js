(function(){
    'use strict'

    var dateServiceModule = angular.module('dateServiceModule', []);

    function DateService() {

        return {
            currentDate: function() {
                return new Date();
            }
        }
    }

    dateServiceModule.factory('DateService', DateService)
}());