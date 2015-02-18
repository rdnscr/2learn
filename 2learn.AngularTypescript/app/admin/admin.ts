module angularTypescript {
    'use strict';
    var controllerId = 'admin';

    export class Admin {
        public title: string = "Admin";

        private getLogFn: any;
        private log: any;

        constructor(private common: common.Common) {
            this.getLogFn = common.logger.getLogFn;
            this.log = this.getLogFn(controllerId);

            this.activate();
        }

        public activate(): void {
            this.common.activateController([], controllerId)
                .then(() => { this.log('Activated Admin View'); });
        }
    }

    angular.module('app').controller(controllerId, ['common', Admin]);
} 