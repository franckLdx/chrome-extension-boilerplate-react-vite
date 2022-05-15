import React, { FC, MouseEventHandler } from "react";
import { ButonType, Button } from "@src/components/Button";
import { User } from "../services/declarations";
import {
  selectedUserId,
  useToggleUserSelection,
} from "../services/selectedUser";
import { useRecoilValue } from "recoil";

interface ToggleUserSelectionButtonProps {
  user: User;
}

export const ToggleUserSelectionButton: FC<ToggleUserSelectionButtonProps> = ({
  user,
}) => {
  const toggleUserSelection = useToggleUserSelection();
  const selectedUserIdValue = useRecoilValue(selectedUserId);

  const type: ButonType =
    selectedUserIdValue === user.id ? "selected" : "default";

  const onClick: MouseEventHandler<HTMLButtonElement> = () =>
    toggleUserSelection(user.id);

  return (
    <Button key={user.id} type={type} onClick={onClick}>
      {user.name}
    </Button>
  );
};
