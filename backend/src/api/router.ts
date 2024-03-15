import { createChart, getChartById, getCharts, updateChartById } from "../controllers/chart";
import { getFrontendConfig } from "../controllers/config";
import express from "express";
const router = express.Router();

router.get('/charts', getCharts);
router.post('/charts', createChart);
router.get('/charts/:id', getChartById);
router.put('/charts/:id', updateChartById);

router.get('/config', getFrontendConfig);

export default router;