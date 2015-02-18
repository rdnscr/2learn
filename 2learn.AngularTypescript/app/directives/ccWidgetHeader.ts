module angularTypescript {
    class CcWidgetHeader {
        public directive = {
            link: this.link,
            scope: {
                'title': '@',
                'subtitle': '@',
                'rightText': '@',
                'allowCollapse': '@'
            },
            templateUrl: '/app/layout/widgetheader.html',
            restrict: 'A',
        };

        constructor() {
            
        }

        public link(scope, element, attrs): void {
            attrs.$set('class', 'widget-head');
        }
    }

    angular.module('app').directive('ccWidgetHeader', () => new CcWidgetHeader().directive);
}