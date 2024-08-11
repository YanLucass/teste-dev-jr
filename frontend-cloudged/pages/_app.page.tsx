// import "styles/globals.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Home from "./home/index.page";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
