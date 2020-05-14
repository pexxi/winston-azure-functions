"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureFunctions = void 0;
const TransportStream = require("winston-transport");
class AzureFunctions extends TransportStream {
    constructor(options) {
        super(options);
        this.name = 'azure-functions';
        this.context = options.context;
        this.level = options.level || 'info';
    }
    log({ level, message }, callback) {
        if (this.context.log[level]) {
            this.context.log[level](message);
        }
        else {
            this.context.log(`[${level}]`, message);
        }
        callback();
    }
}
exports.AzureFunctions = AzureFunctions;
//# sourceMappingURL=index.js.map