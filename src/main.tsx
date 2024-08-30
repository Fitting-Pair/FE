import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import queryClient from "./apis/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
    <Toaster />
  </QueryClientProvider>,
);
