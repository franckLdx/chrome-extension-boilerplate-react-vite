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

  const onToggleSelection = () => {

  }

  return (
    <div className="flex flex-col gap-2 mx-2">
      {usersData.data.map((user) => (
        <button key={user.id} className="text-white bg-yellow">
          {user.name}
        </button>
      ))}
    </div>
  );
  // return <button className="text-white bg-yellow">CLICK HERE !</button>;
};
