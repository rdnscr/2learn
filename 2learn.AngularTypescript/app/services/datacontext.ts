﻿/// <reference path="../common/common.ts" />

module angularTypescript {
    'use strict';

    var serviceId = 'datacontext';
    
    export class DataContext {
        private $q: ng.IQService;

        constructor(common: common.Common) {
            this.$q = common.$q;
        }

        public getMessageCount(): ng.IPromise<number> {
            return this.$q.when(72);
        }

        public getPeople(): ng.IPromise<any> {
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
        }
    }

    angular.module('app').factory(serviceId, ['common', (common) => new DataContext(common)]);
}