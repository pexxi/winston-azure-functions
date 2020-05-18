"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureFunctions = void 0;
const triple_beam_1 = require("triple-beam");
const TransportStream = require("winston-transport");
class AzureFunctions extends TransportStream {
    constructor(options) {
        super(options);
        this.name = "azure-functions";
        this.context = options.context;
        this.level = options.level || "info";
    }
    log(info, callback) {
        setImmediate(() => {
            this.emit("logged", info);
        });
        let message = info[triple_beam_1.MESSAGE];
        if (this.format) {
            message = this.format.transform(info);
        }
        if (this.context.log[info[triple_beam_1.LEVEL]]) {
            this.context.log[info[triple_beam_1.LEVEL]](message);
        }
        else {
            this.context.log(`[${info[triple_beam_1.LEVEL]}]`, message);
        }
        if (callback) {
            callback();
        }
    }
}
exports.AzureFunctions = AzureFunctions;
//# sourceMappingURL=index.js.map