import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
type Data =
  | {
      data: any[];
      pagination: any;
    }
  | { name: string };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return res.status(404).json({ name: "method not supported" });
  }
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10"
  );
  const responseJSON = await response.json();

  res.status(200).json(responseJSON);
}

//proxy server
