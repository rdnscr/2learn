/// <reference path="../config.ts" />
/// <reference path="../common/common.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../app.ts" />

module angularTypescript {
    'use strict';

    var controllerId = 'shell';

    export class Shell {
        private isBusy: boolean;
        private events;
        private logSuccess;
        private spinnerOptions = {
            radius: 40,
            lines: 7,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#F58A00'
        };

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private $rootScope: ng.IRootScopeService, private common: common.Common, private config: any) {
            this.logSuccess = common.logger.getLogFn(controllerId, 'success');
            this.events = config.events;

            this.$rootScope.$on('$routeChangeStart',
                (event, next, current) => {
                    this.toggleSpinner(true);
                }
            );

            this.$rootScope.$on(this.events.controllerActivateSuccess,
                (data) => {
                    this.toggleSpinner(false);
                }
            );

            this.$rootScope.$on(this.events.spinnerToggle,
                (data) => {
                    this.toggleSpinner((<any>data).show);
                }
            );

            this.activate();
        }

        private initializeController() {
        }

        private activate(): void {
            this.logSuccess('Hot Towel Angular + Typescript loaded!', null, true);
            this.common.activateController([], controllerId);
        }

        private toggleSpinner(on: boolean): void {
            this.isBusy = on;
        }
    }

    angularTypescript.app.controller(controllerId, ['$rootScope', 'common', 'config', Shell]);
}