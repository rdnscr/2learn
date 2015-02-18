var common;
(function (common) {
    'use strict';

    var Common = (function () {
        function Common($q, $rootScope, $timeout, commonConfig, logger) {
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.$timeout = $timeout;
            this.commonConfig = commonConfig;
            this.logger = logger;
            this.throttles = {};
        }
        Common.prototype.activateController = function (promises, controllerId) {
            var _this = this;
            return this.$q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                _this.$broadcast(_this.commonConfig.config.controllerActivateSuccessEvent, data);
            });
        };

        Common.prototype.$broadcast = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            return this.$rootScope.$broadcast.apply(this.$rootScope, args);
        };

        Common.prototype.createSearchThrottle = function (viewmodel, list, filteredList, filter, delay) {
            // After a delay, search a viewmodel's list using
            // a filter function, and return a filteredList.
            var _this = this;
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

            return (function () {
                // Wrapped in outer IFFE so we can use closure
                // over filterInputTimeout which references the timeout
                var filterInputTimeout;

                // return what becomes the 'applyFilter' function in the controller
                return function (searchNow) {
                    if (filterInputTimeout) {
                        _this.$timeout.cancel(filterInputTimeout);
                        filterInputTimeout = null;
                    }
                    if (searchNow || !delay) {
                        filterFn();
                    } else {
                        filterInputTimeout = _this.$timeout(filterFn, delay);
                    }
                };
            })();
        };

        Common.prototype.debouncedThrottle = function (key, callback, delay, immediate) {
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
        };

        Common.prototype.isNumber = function (val) {
            // negative or positive
            return /^[-]?\d+$/.test(val);
        };

        Common.prototype.textContains = function (text, searchText) {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        };
        return Common;
    })();
    common.Common = Common;

    //Register DI
    angular.module('common').factory('common', [
        '$q', '$rootScope', '$timeout', 'commonConfig', 'logger', function ($q, $rootScope, $timeout, commonConfig, logger) {
            return new Common($q, $rootScope, $timeout, commonConfig, logger);
        }]);
})(common || (common = {}));
//# sourceMappingURL=common.js.map
