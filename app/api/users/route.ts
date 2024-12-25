// @ts-ignore
import express from "express";
import prisma from "../../lib/prisma";
import authenticate from "../auth/middleware";

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

router.get("/:id", authenticate, async (req, res) => {
    const user = await prisma.user.findUnique({ where: { id: +req.params.id } });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});

export default router;
