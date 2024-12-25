// @ts-ignore
import express from "express";
import authRoutes from "./app/api/auth/route";
import userRoutes from "./app/api/users/route";
import uploadRoutes from "./app/api/uploads/route";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/uploads", uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
