define(["require", "exports", "durandal/system"], function(require, exports, system) {
    var Logger = (function () {
        function Logger(system) {
            this.system = system;
        }
        Logger.prototype.log = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'info');
        };

        Logger.prototype.logError = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'error');
        };

        Logger.prototype.logIt = function (message, data, source, showToast, toastType) {
            source = source ? '[' + source + '] ' : '';
            if (data) {
                system.log(source, message, data);
            } else {
                system.log(source, message);
            }
            if (showToast) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else {
                    toastr.info(message);
                }
            }
        };
        return Logger;
    })();
    exports.Logger = Logger;
});
//# sourceMappingURL=logger.js.map
