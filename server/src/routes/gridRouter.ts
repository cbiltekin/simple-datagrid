import express from "express";
import { createCar, deleteCar, getCar, getCars } from "../controllers/gridController";

const router = express.Router();

// Define endpoints
router.post("/cars", createCar);
router.get("/cars", getCars);
router.get("/cars/:id", getCar);
router.delete("/cars/:id", deleteCar);

export default router;