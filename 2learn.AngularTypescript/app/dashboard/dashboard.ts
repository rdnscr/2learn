module angularTypescript {
    'use strict';
    var controllerId = 'dashboard';

    export class Dashboard {
        public news: any;
        public messageCount: number = 0;
        public people = [];
        public title: string = 'Dashboard';

        private getLogFn: any;
        private log: any;

        constructor(private common: common.Common, public datacontext: angularTypescript.DataContext) {
            this.getLogFn = common.logger.getLogFn;
            this.log = this.getLogFn(controllerId);

            this.news = {
                title: 'Hot Towel Angular',
                description: 'Hot Towel Angular is a SPA template for Angular developers.'
            };

            this.activate();
        }

        public getMessageCount(): ng.IPromise<number> {
            return this.datacontext.getMessageCount().then((data) => {
                return this.messageCount = data;
            });
        }

        public getPeople(): ng.IPromise<any> {
            return this.datacontext.getPeople().then((data) => {
                return this.people = data;
            });
        }

        private activate(): void {
            var promises = [this.getMessageCount(), this.getPeople()];
            this.common.activateController(promises, controllerId)
                .then(() => { this.log('Activated Dashboard View'); });
        }
    }

    angular.module('app').controller(controllerId, ['common', 'datacontext', Dashboard]);
}