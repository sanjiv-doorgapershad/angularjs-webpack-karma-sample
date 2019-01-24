'use strict'

describe('date service', () => {
    var _dateService;

    beforeEach(() => {
        angular.mock.module('dateServiceModule');
    });

    beforeEach(inject(($injector) => {
        _dateService = $injector.get('DateService');
    }));

    it('should be created', () => {
        expect(_dateService).toBeTruthy();
    });

    it('should be today date', () => {
        var date = _dateService.currentDate();

        expect(date.getDate()).toBe(new Date().getDate());
    });
});