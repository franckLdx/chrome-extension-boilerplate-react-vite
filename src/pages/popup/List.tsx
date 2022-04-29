import React, { FC } from "react";
import { Button } from "@src/components/Button";
import { useGetUsers } from "./queries";

export const List: FC = () => {
  const usersData = useGetUsers();

  if (usersData.isRefetching) {
    return <p>Please wait...</p>;
  } else if (usersData.data === undefined) {
    if (usersData.status === "error") {
      return <p>Failed to get users</p>;
    }
    return <p>Loading ...</p>;
  }

  const onToggleSelection = async (id: number) => {
    const oldSelectedUser = await chrome.storage.sync.get("selectedUser");
    if (oldSelectedUser.selectedUser === id) {
      await chrome.storage.sync.remove("selectedUser");
    } else {
      await chrome.storage.sync.set({ selectedUser: id });
    }
  };

  return (
    <div className="flex flex-col gap-2 overflow-auto">
      {usersData.data.map((user) => (
        <Button key={user.id} onClick={() => onToggleSelection(user.id)}>
          {user.name}
        </Button>
      ))}
    </div>
  );
};
