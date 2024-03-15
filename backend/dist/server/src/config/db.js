"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const databaseName = 'vertex';
        const con = await mongoose_1.default.connect(process.env['MONGODB_URI'] || `mongodb://127.0.0.1:27017/${databaseName}`);
        console.log(`Database connected : ${con.connection.host}`);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map