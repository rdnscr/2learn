var common;
(function (common) {
    'use strict';

    var CommonConfig = (function () {
        function CommonConfig() {
            this.config = {};
        }
        CommonConfig.prototype.$get = function () {
            return {
                config: this.config
            };
        };
        return CommonConfig;
    })();
    common.CommonConfig = CommonConfig;

    var commonModule = angular.module('common', []);
    commonModule.provider('commonConfig', CommonConfig);
})(common || (common = {}));
//# sourceMappingURL=commonConfig.js.map
