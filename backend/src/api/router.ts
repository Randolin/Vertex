import { createChart, getChartByPrivateId, getChartByPublicId, getCharts, updateChartById, updateLastLogin, updateLastViewed } from "../controllers/chart";
import { getFrontendConfig } from "../controllers/config";
import express from "express";
const router = express.Router();

router.get('/charts', getCharts);
router.get('/charts/:id', updateLastViewed, getChartByPublicId);
router.put('/charts', updateChartById);
router.post('/charts', createChart);
router.post('/login', updateLastLogin, getChartByPrivateId);

router.get('/config', getFrontendConfig);

export default router;