var angularTypescript;
(function (angularTypescript) {
    'use strict';

    var bootstrapModule = angular.module('common.bootstrap', ['ui.bootstrap']);

    var ModalDialog = (function () {
        function ModalDialog($modal, $templateCache) {
            this.$modal = $modal;
            this.$templateCache = $templateCache;
            this.ModalInstance = [
                '$scope', '$modalInstance', 'options',
                function ($scope, $modalInstance, options) {
                    $scope.title = options.title || 'Title';
                    $scope.message = options.message || '';
                    $scope.okText = options.okText || 'OK';
                    $scope.cancelText = options.cancelText || 'Cancel';
                    $scope.ok = function () {
                        $modalInstance.close('ok');
                    };
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }];
            this.initDialogCache();
        }
        ModalDialog.prototype.initDialogCache = function () {
            this.$templateCache.put('modalDialog.tpl.html', '<div>' + '    <div class="modal-header">' + '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" data-ng-click="cancel()">&times;</button>' + '        <h3>{{title}}</h3>' + '    </div>' + '    <div class="modal-body">' + '        <p>{{message}}</p>' + '    </div>' + '    <div class="modal-footer">' + '        <button class="btn btn-primary" data-ng-click="ok()">{{okText}}</button>' + '        <button class="btn btn-info" data-ng-click="cancel()">{{cancelText}}</button>' + '    </div>' + '</div>');
        };

        ModalDialog.prototype.deleteDialog = function (itemName) {
            var title = 'Confirm Delete';
            itemName = itemName || 'item';
            var msg = 'Delete ' + itemName + '?';

            return this.confirmationDialog(title, msg);
        };

        ModalDialog.prototype.confirmationDialog = function (title, msg, okText, cancelText) {
            if (typeof okText === "undefined") { okText = null; }
            if (typeof cancelText === "undefined") { cancelText = null; }
            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: this.ModalInstance,
                keyboard: true
            };
        };
        return ModalDialog;
    })();

    bootstrapModule.factory('bootstrap.dialog', ['$modal', '$templateCache', function ($modal, $templateCache) {
            return new ModalDialog($modal, $templateCache);
        }]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=bootstrap.dialog.js.map
