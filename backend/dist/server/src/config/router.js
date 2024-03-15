"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const member_1 = require("../controllers/member");
const express_1 = tslib_1.__importDefault(require("express"));
const router = express_1.default.Router();
router.route("/members").get(member_1.getMembers);
router.route("/members:id").get(member_1.getMemberById);
exports.default = router;
//# sourceMappingURL=router.js.map