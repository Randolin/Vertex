"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("./config/db"));
const router_1 = tslib_1.__importDefault(require("./config/router"));
const path_1 = tslib_1.__importDefault(require("path"));
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
(0, db_1.default)();
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use('/api', router_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'client', 'build')));
const secret = process.env['SECRET'] || 'ugly space wizard donkey';
const port = process.env['PORT'] || 8000;
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'client', 'build', 'index.html'));
});
app.listen(port, () => {
    console.log(`App is running in ${process.env['NODE_ENV']} mode on port ${port}`);
});
//# sourceMappingURL=index.js.map