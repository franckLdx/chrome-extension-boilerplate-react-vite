import React, { FC, MouseEventHandler } from "react";
import { ButonType, Button } from "@src/components/Button";
import { User } from "../services/declarations";
import { selectedUserId } from "../services/selectedUser";
import { useRecoilState } from "recoil";

interface ToggleUserSelectionButtonProps {
  user: User;
}

export const ToggleUserSelectionButton: FC<ToggleUserSelectionButtonProps> = ({
  user,
}) => {
  const [selectedUserIdValue, setSelectedUserid] =
    useRecoilState(selectedUserId);

  const onClick: MouseEventHandler<HTMLButtonElement> = () =>
    setSelectedUserid(user.id);

  const type: ButonType =
    selectedUserIdValue === user.id ? "selected" : "default";

  return (
    <Button type={type} key={user.id} onClick={onClick}>
      {user.name}
    </Button>
  );
};
