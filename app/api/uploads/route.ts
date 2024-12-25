// @ts-ignore
import express from "express";
import multer from "multer";
import cloudinary from "../../lib/claudinary";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), async (req, res) => {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const result = await cloudinary.uploader.upload(file.buffer.toString("base64"));
    res.json({ url: result.secure_url });
});

export default router;
