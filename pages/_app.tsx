import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{ shouldRetryOnError: false, fetcher: (url) => axios.get(url) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
