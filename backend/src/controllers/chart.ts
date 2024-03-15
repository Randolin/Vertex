import Chart from "../models/chart";
import { Request, Response } from 'express';
import { getHashedID, getPrivateID } from "../utils/security";
import { nanoid } from 'nanoid';

export const getCharts = async (_req: Request, res: Response) => {
  const charts = await Chart.find().exec();
  res.json(charts);
};

export const updateLastViewed = async (req: Request, res: Response, next: any) => {
  const now = new Date();
  const update = {
    lastViewed: now
  };

  await Chart.findOneAndUpdate({publicId: req.params["id"]}, update).exec();
  next();
};

export const getChartByPublicId = async (req: Request, res: Response) => {
  const chart = await Chart.find({publicId: req.params["id"]}).exec();

  if (chart) {
    res.json(chart);
  } else {
    res.status(404).json({ message: "Chart not found." });
    throw new Error("Chart not found.");
  }
};

export const createChart = async (_req: Request, res: Response) => {
  const privateId: string = getPrivateID();
  const hashedPrivateId: string = getHashedID(privateId);
  const chart = new Chart();
  chart.privateId = hashedPrivateId;
  chart.publicId = nanoid(10);

  const savedChart = await chart.save();
  savedChart.privateId = privateId;
  res.json(savedChart);
};

export const updateLastLogin = async (req: Request, res: Response, next: any) => {
  const hashedID: string = getHashedID(req.body.id);
  const now = new Date();
  const update = {
    lastLogin: now
  };

  await Chart.findOneAndUpdate({privateId: hashedID}, update).exec();
  next();
};

export const getChartByPrivateId = async (req: Request, res: Response) => {
  const hashedID: string = getHashedID(req.body.id);

  const chart = await Chart.find({privateId: hashedID}).exec();

  if (chart) {
    res.json(chart);
  } else {
    res.status(404).json({ message: "Chart not found." });
    throw new Error("Chart not found.");
  }
};

export const updateChartById = async (req: Request, res: Response) => {
  const id: string = req.body.id;
  const hashedID: string = getHashedID(id);

  const now = new Date();
  req.body.lastUpdated = now;

  const chart = await Chart.findOneAndUpdate({privateId: hashedID}, req.body, {new: true}).exec();
  if (chart) {
    res.json(chart);
  } else {
    res.status(404).json({ message: "Chart not found." });
    throw new Error("Chart not found.");
  }
};