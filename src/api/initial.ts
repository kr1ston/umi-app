import type { UmiApiRequest, UmiApiResponse } from "umi";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  switch (req.method) {
    case 'GET':
      res.json({ "initial": "is working" })
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' })
  }
}
