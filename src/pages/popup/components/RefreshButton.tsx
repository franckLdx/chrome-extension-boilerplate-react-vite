import React, { FC } from "react";
import { Button } from "@src/components/Button";
import { useGetUsers } from "../services/users";

export const RefreshButton: FC = () => {
  const { refetch } = useGetUsers();
  return <Button onClick={() => refetch()}>Refresh</Button>;
};
