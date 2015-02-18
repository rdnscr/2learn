module angularTypescript {
    class CcImgPerson {
        private basePath: string;
        private unknownImage: string;

        public directive = {
            link: this.link,
            restrict: 'A'
        };

        constructor(public config: any) {
            this.basePath = config.imageSettings.imageBasePath;
            this.unknownImage = config.imageSettings.unknownImageSource;
        }

        public link(scope, element, attrs): void {
            attrs.$observe('ccImgPerson', function (value) {
                value = this.basePath + (value || this.unknownImage);
                attrs.$set('src', value);
            });
        }
    }

    angular.module('app').directive('ccImgPerson', ['config', (config) => new CcImgPerson(config).directive]);
}