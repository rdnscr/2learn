/// <reference path="../common/common.ts" />
var angularTypescript;
(function (angularTypescript) {
    'use strict';

    var serviceId = 'datacontext';

    var DataContext = (function () {
        function DataContext(common) {
            this.$q = common.$q;
        }
        DataContext.prototype.getMessageCount = function () {
            return this.$q.when(72);
        };

        DataContext.prototype.getPeople = function () {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return this.$q.when(people);
        };
        return DataContext;
    })();
    angularTypescript.DataContext = DataContext;

    angular.module('app').factory(serviceId, ['common', function (common) {
            return new DataContext(common);
        }]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=datacontext.js.map
