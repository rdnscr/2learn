var angularTypescript;
(function (angularTypescript) {
    var CcImgPerson = (function () {
        function CcImgPerson(config) {
            this.config = config;
            this.directive = {
                link: this.link,
                restrict: 'A'
            };
            this.basePath = config.imageSettings.imageBasePath;
            this.unknownImage = config.imageSettings.unknownImageSource;
        }
        CcImgPerson.prototype.link = function (scope, element, attrs) {
            attrs.$observe('ccImgPerson', function (value) {
                value = this.basePath + (value || this.unknownImage);
                attrs.$set('src', value);
            });
        };
        return CcImgPerson;
    })();

    angular.module('app').directive('ccImgPerson', ['config', function (config) {
            return new CcImgPerson(config).directive;
        }]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=ccImgPerson.js.map
