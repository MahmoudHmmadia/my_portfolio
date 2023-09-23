import type { AppProps } from "next/app";
import "@/globals.scss";
import "swiper/css";
import Providers from "./providers";
import Nav from "@/components/Nav";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import icon from "@/public/favicon.ico";
export default function MyApp({ Component, pageProps, router }: AppProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={icon.src} sizes="any" />
      </Head>
      <Providers>
        <div
          className={`bg-gradient_cloudy text-dark dark:bg-gradient_dark dark:text-gray-200 overflow-hidden pb-4 flex flex-col gap-4 min-h-screen`}
        >
          <Nav />
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </Providers>
    </QueryClientProvider>
  );
}
