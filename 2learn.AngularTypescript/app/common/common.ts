module common {
    'use strict';    

    export class Common {
        private throttles = {};

        constructor(public $q: ng.IQService, private $rootScope: ng.IRootScopeService,
            public $timeout: ng.ITimeoutService, private commonConfig: common.CommonConfig, public logger: common.Logger) {

        }

        public activateController(promises, controllerId): ng.IPromise<void> {
            return this.$q.all(promises).then((eventArgs) => {
                var data = { controllerId: controllerId };
                this.$broadcast(this.commonConfig.config.controllerActivateSuccessEvent, data);
            });
        }

        public $broadcast(...args: any[]): ng.IAngularEvent {
            return this.$rootScope.$broadcast.apply(this.$rootScope, args);
        }

        public createSearchThrottle(viewmodel, list, filteredList, filter, delay) {
            // After a delay, search a viewmodel's list using 
            // a filter function, and return a filteredList.

            // custom delay or use default
            delay = +delay || 300;
            // if only vm and list parameters were passed, set others by naming convention 
            if (!filteredList) {
                // assuming list is named sessions, filteredList is filteredSessions
                filteredList = 'filtered' + list[0].toUpperCase() + list.substr(1).toLowerCase(); // string
                // filter function is named sessionFilter
                filter = list + 'Filter'; // function in string form
            }

            // create the filtering function we will call from here
            var filterFn = function () {
                // translates to ...
                // vm.filteredSessions 
                //      = vm.sessions.filter(function(item( { returns vm.sessionFilter (item) } );
                viewmodel[filteredList] = viewmodel[list].filter(function (item) {
                    return viewmodel[filter](item);
                });
            };

            return (() => {
                // Wrapped in outer IFFE so we can use closure 
                // over filterInputTimeout which references the timeout
                var filterInputTimeout;

                // return what becomes the 'applyFilter' function in the controller
                return (searchNow) => {
                    if (filterInputTimeout) {
                        this.$timeout.cancel(filterInputTimeout);
                        filterInputTimeout = null;
                    }
                    if (searchNow || !delay) {
                        filterFn();
                    } else {
                        filterInputTimeout = this.$timeout(filterFn, delay);
                    }
                };
            })();
        }

        public debouncedThrottle(key: string, callback: () => void, delay: number, immediate: boolean): void {
            // Perform some action (callback) after a delay. 
            // Track the callback by key, so if the same callback 
            // is issued again, restart the delay.

            var defaultDelay = 1000;
            delay = delay || defaultDelay;
            if (this.throttles[key]) {
                this.$timeout.cancel(this.throttles[key]);
                this.throttles[key] = undefined;
            }
            if (immediate) {
                callback();
            } else {
                this.throttles[key] = this.$timeout(callback, delay);
            }
        }

        public isNumber(val: string): boolean {
            // negative or positive
            return /^[-]?\d+$/.test(val);
        }

        public textContains(text: string, searchText: string): boolean {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        }
    }

    //Register DI
    angular.module('common').factory('common', ['$q', '$rootScope', '$timeout', 'commonConfig', 'logger', ($q, $rootScope, $timeout, commonConfig, logger) =>
        new Common($q, $rootScope, $timeout, commonConfig, logger)]);    
}