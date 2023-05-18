import { Response } from 'express';

interface IApiResponse {
  success: boolean;
  data?: any;
  error?: any;
}

export const sendApiResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  data?: any,
  error?: any
): void => {
  const apiResponse: IApiResponse = { success };
  if (data) apiResponse.data = data;
  if (error) apiResponse.error = error;

  res.status(statusCode).json(apiResponse);
};
