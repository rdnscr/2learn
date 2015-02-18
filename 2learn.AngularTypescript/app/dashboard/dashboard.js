var angularTypescript;
(function (angularTypescript) {
    'use strict';
    var controllerId = 'dashboard';

    var Dashboard = (function () {
        function Dashboard(common, datacontext) {
            this.common = common;
            this.datacontext = datacontext;
            this.messageCount = 0;
            this.people = [];
            this.title = 'Dashboard';
            this.getLogFn = common.logger.getLogFn;
            this.log = this.getLogFn(controllerId);

            this.news = {
                title: 'Hot Towel Angular',
                description: 'Hot Towel Angular is a SPA template for Angular developers.'
            };

            this.activate();
        }
        Dashboard.prototype.getMessageCount = function () {
            var _this = this;
            return this.datacontext.getMessageCount().then(function (data) {
                return _this.messageCount = data;
            });
        };

        Dashboard.prototype.getPeople = function () {
            var _this = this;
            return this.datacontext.getPeople().then(function (data) {
                return _this.people = data;
            });
        };

        Dashboard.prototype.activate = function () {
            var _this = this;
            var promises = [this.getMessageCount(), this.getPeople()];
            this.common.activateController(promises, controllerId).then(function () {
                _this.log('Activated Dashboard View');
            });
        };
        return Dashboard;
    })();
    angularTypescript.Dashboard = Dashboard;

    angular.module('app').controller(controllerId, ['common', 'datacontext', Dashboard]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=dashboard.js.map
