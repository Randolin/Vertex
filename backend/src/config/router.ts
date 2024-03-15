import { getMembers, getMemberById } from "../controllers/member";
import express from "express";
const router = express.Router();

router.route("/members").get(getMembers);
router.route("/members:id").get(getMemberById);

export default router;