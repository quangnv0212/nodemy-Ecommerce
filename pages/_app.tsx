import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { SWRConfig } from "swr";
import axiosClient from "@/api/axios-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        fetcher: (url) => axiosClient.get(url),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
