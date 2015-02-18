/// <reference path="../../scripts/typings/toastr/toastr.d.ts" />
import system = require("durandal/system");

export class Logger {
    constructor(private system: DurandalSystemModule) {
    }

    public log(message, data, source, showToast) {
        this.logIt(message, data, source, showToast, 'info');
    }

    public logError(message, data, source, showToast) {
        this.logIt(message, data, source, showToast, 'error');
    }

    public logIt(message, data, source, showToast, toastType) {
        source = source ? '[' + source + '] ' : '';
        if (data) {
            system.log(source, message, data);
        } else {
            system.log(source, message);
        }
        if (showToast) {
            if (toastType === 'error') {
                toastr.error(message);
            } else {
                toastr.info(message);
            }

        }

    }
}