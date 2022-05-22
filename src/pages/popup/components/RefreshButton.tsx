import React, { FC, MouseEventHandler } from "react";
import {
  Button,
  ButtonAnimationType,
  ButtonCursorType,
} from "@src/components/Button";
import { useGetUsers } from "../services/users";

export const RefreshButton: FC = () => {
  const { refetch, isFetching, isLoading } = useGetUsers();
  const isQueryActive = isFetching || isLoading;

  const text = isQueryActive ? "Loading, please wait ..." : "Refresh";

  const animationType: ButtonAnimationType | undefined = isQueryActive
    ? "pulse"
    : undefined;

  const cursorType: ButtonCursorType = isQueryActive ? "progress" : "pointer";

  const onClick: MouseEventHandler<HTMLButtonElement> | undefined =
    isQueryActive ? undefined : () => refetch();

  return (
    <Button
      animationType={animationType}
      cursorType={cursorType}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
