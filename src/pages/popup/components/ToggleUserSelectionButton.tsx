import React, { FC, MouseEventHandler } from "react";
import { Button } from "@src/components/Button";
import { User } from "../services/declarations";
import { toggleuserSelection } from "../services/storage";

interface ToggleUserSelectionButtonProps {
  user: User;
}

export const ToggleUserSelectionButton: FC<ToggleUserSelectionButtonProps> = ({
  user,
}) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = () =>
    toggleuserSelection(user.id);

  return (
    <Button key={user.id} onClick={onClick}>
      {user.name}
    </Button>
  );
};
