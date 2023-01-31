import { TransportProvider } from "@bufbuild/connect-query";
import { createConnectTransport } from "@bufbuild/connect-web";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const transport = createConnectTransport({
    baseUrl: "https://api.coobeet.me",
  });
  const [queryClient] = useState(() => new QueryClient());

  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </TransportProvider>
  );
}
