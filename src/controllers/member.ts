import Member from "../models/member.js";
import asyncHandler from "express-async-handler";

export const getMembers = asyncHandler(async (req, res) => {
  const members = await Member.find({});
  res.json(members);
});

export const getMemberById = asyncHandler(async (req, res) => {
  const member = await Member.findById(req.params.id);

  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ message: "Member not found." });
    res.status(404);
    throw new Error("Member not found.");
  }
});
