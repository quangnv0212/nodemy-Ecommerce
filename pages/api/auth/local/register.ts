import { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";
const proxy = httpProxy.createProxyServer();
export const config = {
  api: {
    bodyParser: false,
  },
};
type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }
  return new Promise((resolve) => {
    //convert cookies to header authorization

    req.headers.cookie = "";
    const handleRegisterResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        try {
          console.log(body);
          const { jwt: accessToken, user } = JSON.parse(body);
          //   res.end("success");
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });
          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
          });
          (res as NextApiResponse)
            .status(200)
            .json({ message: "create new account success nè", user });
          resolve(true);
        } catch (error) {
          const { data, error: err } = JSON.parse(body);
          (res as NextApiResponse)
            .status(500)
            .json({ message: "something went wrong", err });
        }
      });
    };
    proxy.once("proxyRes", handleRegisterResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
