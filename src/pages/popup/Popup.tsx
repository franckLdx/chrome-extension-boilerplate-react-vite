import React, { FC } from "react";
import "@pages/popup/Popup.css";
import { List } from "./components/List";
import { RefreshButton } from "./components/RefreshButton";
import { Filter } from "./components/Filter";

export const Popup: FC = () => {
  return (
    <div className="flex flex-col px-2 py-3">
      <div className="flex flex-col gap-2 mb-4 pb-2 border-b-4 border-b-black">
        <RefreshButton />
        <Filter />
      </div>
      <List />
    </div>
  );
};
