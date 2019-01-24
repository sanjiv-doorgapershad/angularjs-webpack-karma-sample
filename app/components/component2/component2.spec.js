'use strict'

describe('compoenent2', () => {
    var componentController, dateService;

    beforeEach(() => {
        angular.mock.module('component2Module', 'dateServiceModule');
    });

    beforeEach(angular.mock.inject(($componentController, DateService) => {
        componentController = $componentController;
        dateService = DateService;
    }));


    it('should be created', () => {
        var ctrl = componentController('component2', {DateService: dateService});
        expect(ctrl).toBeTruthy();
    });

    it('should have date initialised', () => {
        var ctrl = componentController('component2', {DateService: dateService});
        ctrl.$onInit();
        expect(ctrl.date).toBeTruthy();
    });
});