import type { NextFunction, Request, Response } from 'express';
import logger from './logger';

const ondcLayer =
  ({ ondcConfig, onSearch, onSelect, onInit, onConfirm }: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    logger.info(`Request from: ${req.originalUrl}`);
    const endPoint = req.originalUrl;
    if (endPoint.includes('/on_')) {
      logger.info(`Request from ONDC: ${req.originalUrl}`);
      next();
    } else {
      logger.info(`Request from others: ${req.originalUrl}`);
      next();
    }
  };

export default ondcLayer;
