define(["require", "exports", "services/logger", "durandal/system", "plugins/router"], function(require, exports, LoggerModule, system, router) {
    var Shell = (function () {
        function Shell() {
            this.system = system;
            this.router = router;
            this.logger = new LoggerModule.Logger(system);
        }
        //#region Internal Methods
        Shell.prototype.activate = function () {
            return this.boot();
        };

        Shell.prototype.boot = function () {
            this.log('Hot Towel SPA Loaded!', null, true);

            this.router.on('router:route:not-found', function (fragment) {
                this.logError('No Route Found', fragment, true);
            });

            var routes = [
                { route: '', moduleId: 'home', title: 'Home', nav: 1 },
                { route: 'details', moduleId: 'details', title: 'Details', nav: 2 }];

            return this.router.makeRelative({ moduleId: 'viewmodels' }).map(routes).buildNavigationModel().activate();
        };

        Shell.prototype.log = function (msg, data, showToast) {
            this.logger.log(msg, data, system.getModuleId(this), showToast);
        };

        Shell.prototype.logError = function (msg, data, showToast) {
            this.logger.logError(msg, data, system.getModuleId(this), showToast);
        };
        return Shell;
    })();
    exports.Shell = Shell;
});
//# sourceMappingURL=shell.js.map
