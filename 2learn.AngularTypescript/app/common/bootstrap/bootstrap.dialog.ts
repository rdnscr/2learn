module angularTypescript {
    'use strict';

    var bootstrapModule = angular.module('common.bootstrap', ['ui.bootstrap']);

    class ModalDialog {
        private ModalInstance = ['$scope', '$modalInstance', 'options',
            function ($scope, $modalInstance, options) {
                $scope.title = options.title || 'Title';
                $scope.message = options.message || '';
                $scope.okText = options.okText || 'OK';
                $scope.cancelText = options.cancelText || 'Cancel';
                $scope.ok = function () { $modalInstance.close('ok'); };
                $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
            }];

        constructor(private $modal, private $templateCache) {
            this.initDialogCache();
        }

        private initDialogCache(): void {
            this.$templateCache.put('modalDialog.tpl.html',
                '<div>' +
                '    <div class="modal-header">' +
                '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" data-ng-click="cancel()">&times;</button>' +
                '        <h3>{{title}}</h3>' +
                '    </div>' +
                '    <div class="modal-body">' +
                '        <p>{{message}}</p>' +
                '    </div>' +
                '    <div class="modal-footer">' +
                '        <button class="btn btn-primary" data-ng-click="ok()">{{okText}}</button>' +
                '        <button class="btn btn-info" data-ng-click="cancel()">{{cancelText}}</button>' +
                '    </div>' +
                '</div>');
        }

        public deleteDialog(itemName): any {
            var title = 'Confirm Delete';
            itemName = itemName || 'item';
            var msg = 'Delete ' + itemName + '?';

            return this.confirmationDialog(title, msg);
        }

        public confirmationDialog(title, msg, okText= null, cancelText= null): any {
            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: this.ModalInstance,
                keyboard: true,
            }
        }
    }

    bootstrapModule.factory('bootstrap.dialog', ['$modal', '$templateCache', ($modal, $templateCache) => new ModalDialog($modal, $templateCache)]);
}