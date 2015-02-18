var angularTypescript;
(function (angularTypescript) {
    'use strict';
    var controllerId = 'admin';

    var Admin = (function () {
        function Admin(common) {
            this.common = common;
            this.title = "Admin";
            this.getLogFn = common.logger.getLogFn;
            this.log = this.getLogFn(controllerId);

            this.activate();
        }
        Admin.prototype.activate = function () {
            var _this = this;
            this.common.activateController([], controllerId).then(function () {
                _this.log('Activated Admin View');
            });
        };
        return Admin;
    })();
    angularTypescript.Admin = Admin;

    angular.module('app').controller(controllerId, ['common', Admin]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=admin.js.map
