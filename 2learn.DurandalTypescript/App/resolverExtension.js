define(["require", "exports", "durandal/system", "plugins/router"], function(require, exports, system, router) {
    function setupRouterForTypescript() {
        router.getActivatableInstance = function (element, settings, module) {
            if (typeof module == 'function') {
                return new module();
            } else if (module.create) {
                //invocation process implemented in typescript modules
                var vm = module.create();
                vm.__moduleId__ = module.__moduleId__;
                return vm;
            } else {
                return module;
            }
        };

        system.resolveObject = $.proxy(typescriptResolve, system);

        function typescriptResolve(module) {
            if (system.isFunction(module)) {
                return new module();
            } else if (extractFunction(module)) {
                //invocation process implemented in typescript modules
                return new module[extractFunction(module)]();
            } else {
                return module;
            }
        }
    }
    exports.setupRouterForTypescript = setupRouterForTypescript;

    function extractFunction(vmModule) {
        for (var id in vmModule) {
            if (vmModule.hasOwnProperty(id)) {
                if (typeof vmModule[id] == 'function') {
                    return id;
                }
            }
        }
    }
});
//# sourceMappingURL=resolverExtension.js.map
