import { useMutation, useQuery, useQueryClient } from "react-query";
import { User } from "./declarations";
import { useGetUser } from "./users";

export const useGetSelectedUser = (): User | undefined => {
  const { data: selectedUserIdValue } = useGetSelectedUserId();
  const getUser = useGetUser();
  return selectedUserIdValue != undefined
    ? getUser(selectedUserIdValue)
    : undefined;
};

export const useGetSelectedUserId = () =>
  useQuery({
    queryKey: ["selectedUserId"],
    queryFn: readUserSelection,
  });

export const useSetSelectedUserId = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerUserSelection,
    onSettled: (_response, _error, selectedUserId) => {
      queryClient.setQueryData("selectedUserId", selectedUserId);
    },
  });
};

const key = "selectedUser";

const registerUserSelection = async (
  userId: number | undefined
): Promise<void> => {
  if (userId === undefined) {
    await chrome.storage.sync.remove(key);
  } else {
    await chrome.storage.sync.set({ [key]: userId });
  }
};

const readUserSelection = async (): Promise<number | undefined> => {
  const data = await chrome.storage.sync.get(key);
  return data.key;
};
