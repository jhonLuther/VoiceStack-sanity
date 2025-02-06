import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Always send a valid JSON response
  res.status(200).json({
    success: true,
    method: req.method,
    type: req.query.type,
    receivedAt: new Date().toISOString()
  });
}