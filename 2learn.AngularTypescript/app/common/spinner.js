var common;
(function (_common) {
    'use strict';

    /**
    * Services that persists and retrieves TODOs from localStorage.
    */
    var Spinner = (function () {
        function Spinner(common, commonConfig) {
            this.common = common;
            this.commonConfig = commonConfig;
        }
        Spinner.prototype.spinnerHide = function () {
            this.spinnerToggle(false);
        };

        Spinner.prototype.spinnerShow = function () {
            this.spinnerToggle(true);
        };

        Spinner.prototype.spinnerToggle = function (show) {
            this.common.$broadcast(this.commonConfig.config.spinnerToggleEvent, { show: show });
        };
        return Spinner;
    })();
    _common.Spinner = Spinner;

    //Register at angulars DI
    angular.module('common').factory('spinner', ['common', 'commonConfig', Spinner]);
})(common || (common = {}));
//# sourceMappingURL=spinner.js.map
