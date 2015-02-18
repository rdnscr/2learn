/// <reference path="../config.ts" />
/// <reference path="../common/common.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../app.ts" />
var angularTypescript;
(function (angularTypescript) {
    'use strict';

    var controllerId = 'shell';

    var Shell = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function Shell($rootScope, common, config) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.common = common;
            this.config = config;
            this.spinnerOptions = {
                radius: 40,
                lines: 7,
                length: 0,
                width: 30,
                speed: 1.7,
                corners: 1.0,
                trail: 100,
                color: '#F58A00'
            };
            this.logSuccess = common.logger.getLogFn(controllerId, 'success');
            this.events = config.events;

            this.$rootScope.$on('$routeChangeStart', function (event, next, current) {
                _this.toggleSpinner(true);
            });

            this.$rootScope.$on(this.events.controllerActivateSuccess, function (data) {
                _this.toggleSpinner(false);
            });

            this.$rootScope.$on(this.events.spinnerToggle, function (data) {
                _this.toggleSpinner(data.show);
            });

            this.activate();
        }
        Shell.prototype.initializeController = function () {
        };

        Shell.prototype.activate = function () {
            this.logSuccess('Hot Towel Angular + Typescript loaded!', null, true);
            this.common.activateController([], controllerId);
        };

        Shell.prototype.toggleSpinner = function (on) {
            this.isBusy = on;
        };
        return Shell;
    })();
    angularTypescript.Shell = Shell;

    angularTypescript.app.controller(controllerId, ['$rootScope', 'common', 'config', Shell]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=shell.js.map
