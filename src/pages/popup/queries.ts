import { useQuery } from "react-query";

const usersTag = "users";

interface User {
  id: number;
  name: string;
}

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
