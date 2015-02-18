import system = require("durandal/system");
import router = require("plugins/router");
import composition = require("durandal/composition");
import viewEngine = require("durandal/viewEngine");
import viewLocator = require("durandal/viewLocator");

export function setupRouterForTypescript() {
    (<any>router).getActivatableInstance = function (element, settings, module) {
        if (typeof module == 'function') {
            return new module();
        } else if (module.create) {
            //invocation process implemented in typescript modules
            var vm = module.create();
            vm.__moduleId__ = module.__moduleId__;
            return vm;
        }
        else {
            return module;
        }
    };

    system.resolveObject = $.proxy(typescriptResolve, <any>system);

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

function extractFunction(vmModule) {
    for (var id in vmModule) {
        if (vmModule.hasOwnProperty(id)) {
            if (typeof vmModule[id] == 'function') {
                return id;
            }
        }
    }
}