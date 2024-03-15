import Chart from "../models/chart";
import { Request, Response } from 'express';
import { getHashedID, getPrivateID } from "../utils/security";
import { nanoid } from 'nanoid';

export const getCharts = async (req: Request, res: Response) => {
  const charts = await Chart.find();
  res.json(charts);
};

export const createChart = async (req: Request, res: Response) => {
  const privateId: string = getPrivateID();
  const hashedPrivateId: string = getHashedID(privateId);
  const chart = new Chart();
  chart.privateId = hashedPrivateId;
  chart.publicId = nanoid(10);

  const savedChart = await chart.save();
  savedChart.privateId = privateId;
  res.json(savedChart);
};

export const getChartById = async (req: Request, res: Response) => {
  const hashedID: string = getHashedID(req.params["id"]);
  const chart = await Chart.find({privateId: hashedID}).exec();

  if (chart) {
    res.json(chart);
  } else {
    res.status(404).json({ message: "Chart not found." });
    throw new Error("Chart not found.");
  }
};

export const updateChartById = async (req: Request, res: Response) => {
  const hashedID: string = getHashedID(req.params["id"]);
  const chart = await Chart.findOneAndUpdate({privateId: hashedID}, req.body, {new: true}).exec();
  if (chart) {
    res.json(chart);
  } else {
    res.status(404).json({ message: "Chart not found." });
    throw new Error("Chart not found.");
  }
};