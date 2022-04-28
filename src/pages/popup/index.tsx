import React from "react";
import { createRoot } from "react-dom/client";
import { Popup } from "@pages/popup/Popup";
import "@pages/popup/index.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(
    <QueryClientProvider client={queryClient}>
      <Popup />
    </QueryClientProvider>
  );
}

init();
