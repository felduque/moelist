import "bootstrap/dist/css/bootstrap.min.css";

import "@/styles/globals.css";
import "@/styles/cardItem.css";
import "@/styles/navbar.css";
import "@/styles/loginRegisterForm.css";
import "@/styles/search.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { AppWrapper } from "@/utils/state";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}
