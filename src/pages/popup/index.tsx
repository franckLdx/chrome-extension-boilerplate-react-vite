import React from "react";
import { createRoot } from "react-dom/client";
import { Popup } from "@src/pages/popup/Popup";
import "@pages/popup/index.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";
import { RecoilRoot } from "recoil";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Popup />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

init();
