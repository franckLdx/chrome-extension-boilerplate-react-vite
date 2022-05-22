import React, { FC } from "react";
import { useGetUsers } from "../services/users";
import { useRecoilValue } from "recoil";
import { filterState } from "../services/filter";
import { isNameMatch, User } from "../services/declarations";
import { ToggleUserSelectionButton } from "./ToggleUserSelectionButton";
import { useGetSelectedUserId } from "../services/selectedUser";

interface GetDisplayedListProps {
  selectedUserIdValue: number | undefined;
  filter: string | undefined;
  usersList: User[];
}
const getDisplayedList = ({
  selectedUserIdValue,
  filter,
  usersList,
}: GetDisplayedListProps): User[] => {
  let displayedList = [...usersList];
  if (filter) {
    displayedList = displayedList.filter((user) => isNameMatch(user, filter));
  }
  if (selectedUserIdValue) {
    displayedList = displayedList.filter((user) => {
      return user.id !== selectedUserIdValue;
    });
  }
  return displayedList;
};

export const List: FC = () => {
  const usersData = useGetUsers();
  const filter = useRecoilValue(filterState);
  const { data: selectedUserId } = useGetSelectedUserId();

  if (usersData.isRefetching) {
    return <p>Please wait...</p>;
  } else if (usersData.data === undefined) {
    if (usersData.status === "error") {
      return <p>Failed to get users</p>;
    }
    return <p>Loading ...</p>;
  }

  const displayedList = getDisplayedList({
    selectedUserIdValue: selectedUserId,
    filter,
    usersList: usersData.data,
  });

  return (
    <div className="flex flex-col gap-2 max-h-80 overflow-auto">
      {displayedList.map((user) => (
        <ToggleUserSelectionButton key={user.id} user={user} />
      ))}
    </div>
  );
};
