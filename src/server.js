import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { config } from "./config/env.js";
import errorHandler from "./middleware/errorMiddleware.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import quotationRoutes from "./routes/quotationRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: true, // Dynamically allows ALL origins (acts like '*' but works with credentials=true)
    credentials: true,
  }),
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/products", productRoutes);
app.use("/api", companyRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use(errorHandler);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
