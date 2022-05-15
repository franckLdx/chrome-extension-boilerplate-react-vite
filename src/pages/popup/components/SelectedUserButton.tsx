import React, { FC } from "react";
import { useGetSelectedUser } from "../services/selectedUser";
import { ToggleUserSelectionButton } from "./ToggleUserSelectionButton";

export const SelectedUserButton: FC = () => {
  const user = useGetSelectedUser();
  if (!user) {
    return null;
  }
  return <ToggleUserSelectionButton user={user} />;
};
