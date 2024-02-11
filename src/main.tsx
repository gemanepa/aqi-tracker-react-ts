import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "./ui/AppLayout";
import "./main.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./ui/Header/components";
import AQIDashboard from "./ui/AQIDashboard/components";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppLayout Header={<Header />} AQIDashboard={<AQIDashboard />} />
    </QueryClientProvider>
  </React.StrictMode>
);
