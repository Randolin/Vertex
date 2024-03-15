"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberById = exports.getMembers = void 0;
const tslib_1 = require("tslib");
const member_1 = tslib_1.__importDefault(require("../models/member"));
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
exports.getMembers = (0, express_async_handler_1.default)(async (req, res) => {
    const members = await member_1.default.find({});
    res.json(members);
});
exports.getMemberById = (0, express_async_handler_1.default)(async (req, res) => {
    const member = await member_1.default.findById(req.params["id"]);
    if (member) {
        res.json(member);
    }
    else {
        res.status(404).json({ message: "Member not found." });
        res.status(404);
        throw new Error("Member not found.");
    }
});
//# sourceMappingURL=member.js.map