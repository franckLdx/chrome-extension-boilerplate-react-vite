import React, { FC } from "react";
import { useGetUsers } from "./queries";
import "@pages/popup/Popup.css";

export const Popup: FC = () => {
  const usersData = useGetUsers();

  if (usersData.data === undefined) {
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
    <div className="flex flex-col gap-2 mx-2">
      {usersData.data.map((user) => (
        <button
          key={user.id}
          className="text-white bg-yellow"
          onClick={() => onToggleSelection(user.id)}
        >
          {user.name}
        </button>
      ))}
    </div>
  );
};
