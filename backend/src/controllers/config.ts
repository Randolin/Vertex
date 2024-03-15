import { BackendConfig, FrontendConfig } from "../models/config";
import { Request, Response } from 'express';

export const getBackendConfig = async () => {
  const config = await BackendConfig.findOne();
  return config;
};

export const getFrontendConfig = async (req: Request, res: Response) => {
  const config = await FrontendConfig.findOne();
  res.json(config);
}