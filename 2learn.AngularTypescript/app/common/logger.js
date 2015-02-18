var common;
(function (common) {
    'use strict';

    var Logger = (function () {
        function Logger($log) {
            var _this = this;
            this.$log = $log;
            this.log = function (message, data, source, showToast) {
                return _this.logInner(message, data, source, showToast);
            };
            this.logWarning = function (message, data, source, showToast) {
                return _this.logWarningInner(message, data, source, showToast);
            };
            this.logSuccess = function (message, data, source, showToast) {
                return _this.logSuccessInner(message, data, source, showToast);
            };
            this.logError = function (message, data, source, showToast) {
                return _this.logErrorInner(message, data, source, showToast);
            };
            this.getLogFn = function (moduleId, fnName) {
                return _this.getLogFnInner(moduleId, fnName);
            };
        }
        Logger.prototype.getLogFnInner = function (moduleId, fnName) {
            fnName = fnName || 'log';
            switch (fnName.toLowerCase()) {
                case 'success':
                    fnName = 'logSuccess';
                    break;
                case 'error':
                    fnName = 'logError';
                    break;
                case 'warn':
                    fnName = 'logWarning';
                    break;
                case 'warning':
                    fnName = 'logWarning';
                    break;
            }

            var logFn = this[fnName] || this.log;
            return function (msg, data, showToast) {
                logFn(msg, data, moduleId, (showToast === undefined) ? true : showToast);
            };
        };

        Logger.prototype.logInner = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'info');
        };

        Logger.prototype.logWarningInner = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'warning');
        };

        Logger.prototype.logSuccessInner = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'success');
        };

        Logger.prototype.logErrorInner = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'error');
        };

        Logger.prototype.logIt = function (message, data, source, showToast, toastType) {
            var write = (toastType === 'error') ? this.$log.error : this.$log.log;
            source = source ? '[' + source + '] ' : '';
            write(source, message, data);
            if (showToast) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else if (toastType === 'warning') {
                    toastr.warning(message);
                } else if (toastType === 'success') {
                    toastr.success(message);
                } else {
                    toastr.info(message);
                }
            }
        };
        return Logger;
    })();
    common.Logger = Logger;

    //Register DI
    angular.module('common').factory('logger', ['$log', function ($log) {
            return new Logger($log);
        }]);
})(common || (common = {}));
//# sourceMappingURL=logger.js.map
