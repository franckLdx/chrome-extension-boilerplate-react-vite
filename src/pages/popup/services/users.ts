import { useQuery } from "react-query";
import { User } from "./declarations";

const usersTag = "users";

const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("request failed");
  }
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((user: any) => ({ id: user.id, name: user.name }));
};

export const useGetUsers = () => useQuery(usersTag, getUsers);

export const useGetUser = () => {
  const { data: users } = useGetUsers();
  return (userId: number): User | undefined => {
    if (!users) {
      return undefined;
    }
    return users.find((user) => user.id === userId);
  };
};
