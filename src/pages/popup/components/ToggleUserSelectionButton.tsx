import React, { FC, MouseEventHandler } from "react";
import { ButonType, Button } from "@src/components/Button";
import { User } from "../services/declarations";
import {
  useGetSelectedUserId,
  useSetSelectedUserId,
} from "../services/selectedUser";

interface ToggleUserSelectionButtonProps {
  className?: string;
  user: User;
}

export const ToggleUserSelectionButton: FC<ToggleUserSelectionButtonProps> = ({
  className,
  user,
}) => {
  const { data: selectedUserId } = useGetSelectedUserId();
  const { mutate } = useSetSelectedUserId();

  const type: ButonType = selectedUserId === user.id ? "selected" : "default";

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    const toggleValue = user.id === selectedUserId ? undefined : user.id;
    mutate(toggleValue);
  };

  return (
    <Button key={user.id} className={className} type={type} onClick={onClick}>
      {user.name}
    </Button>
  );
};
