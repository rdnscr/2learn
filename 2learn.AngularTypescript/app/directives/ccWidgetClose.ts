module angularTypescript {
    class CcWidgetClose {
        public directive = {
            link: this.link,
            template: '<i class="fa fa-remove"></i>',
            restrict: 'A'
        };

        constructor() {

        }

        public link(scope, element, attrs): void {
            attrs.$set('href', '#');
            attrs.$set('wclose');
            element.click(close);

            function close(e) {
                e.preventDefault();
                element.parent().parent().parent().hide(100);
            }
        }
    }

    angular.module('app').directive('ccWidgetClose', () => new CcWidgetClose().directive);
}