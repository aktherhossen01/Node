"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const server = node_http_1.default.createServer((req, res) => {
    console.log("Server is running....");
    if (req.url === "/" && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Hello from node js with ",
            path: req.url
        }));
    }
});
server.listen(5000, () => {
    console.log(`Server in running On port ${5000}`);
});
//# sourceMappingURL=server.js.map