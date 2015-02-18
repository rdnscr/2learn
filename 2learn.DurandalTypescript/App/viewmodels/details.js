define(["require", "exports", "services/logger", "durandal/system"], function(require, exports, LoggerModule, system) {
    var Details = (function () {
        function Details() {
            this.title = 'Details';
            this.logger = new LoggerModule.Logger(system);
        }
        Details.prototype.activate = function () {
            this.logger.log(this.title + ' View Activated', null, this.title, true);
            return true;
        };
        return Details;
    })();
    exports.Details = Details;
});
//# sourceMappingURL=details.js.map
