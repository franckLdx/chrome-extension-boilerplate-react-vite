import React, { FC, useDeferredValue } from "react";
import { Button } from "@src/components/Button";
import { useGetUsers } from "../services/queries";
import { useRecoilValue } from "recoil";
import { filterState } from "../services/atom";
import { isNameMatch } from "../services/declarations";
import { ToggleUserSelectionButton } from "./ToggleUserSelectionButton";

export const List: FC = () => {
  const usersData = useGetUsers();
  const filter = useRecoilValue(filterState);

  if (usersData.isRefetching) {
    return <p>Please wait...</p>;
  } else if (usersData.data === undefined) {
    if (usersData.status === "error") {
      return <p>Failed to get users</p>;
    }
    return <p>Loading ...</p>;
  }

  const displayedList = filter
    ? usersData.data.filter((user) => isNameMatch(user, filter))
    : usersData.data;

  const onToggleSelection = async (id: number) => {
    const oldSelectedUser = await chrome.storage.sync.get("selectedUser");
    if (oldSelectedUser.selectedUser === id) {
      await chrome.storage.sync.remove("selectedUser");
    } else {
      await chrome.storage.sync.set({ selectedUser: id });
    }
  };

  return (
    <div className="flex flex-col gap-2 max-h-80 overflow-auto">
      {displayedList.map((user) => (
        <ToggleUserSelectionButton key={user.id} user={user} />
      ))}
    </div>
  );
};
