import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
type Data = {
  name: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "catch all path" });
}
