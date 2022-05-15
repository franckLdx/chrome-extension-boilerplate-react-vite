import React, { FC } from "react";
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

  return (
    <div className="flex flex-col gap-2 max-h-80 overflow-auto">
      {displayedList.map((user) => (
        <ToggleUserSelectionButton key={user.id} user={user} />
      ))}
    </div>
  );
};
