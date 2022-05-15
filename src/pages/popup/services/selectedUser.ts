import { atom, useRecoilState, useRecoilValue } from "recoil";
import { User } from "./declarations";
import { useGetUser } from "./users";

export const useGetSelectedUser = (): User | undefined => {
  const selectedUserIdValue = useRecoilValue(selectedUserId);
  const getUser = useGetUser();
  return selectedUserIdValue != undefined
    ? getUser(selectedUserIdValue)
    : undefined;
};

export const useToggleUserSelection = () => {
  const [selectedUserIdValue, setSelectedUserid] =
    useRecoilState(selectedUserId);
  return (userId: number) => {
    if (userId === selectedUserIdValue) {
      setSelectedUserid(undefined);
    } else {
      setSelectedUserid(userId);
    }
  };
};

export const selectedUserId = atom<number | undefined>({
  key: "selectedUser",
  default: undefined,
  // effects_UNSTABLE: [
  //   ({ onSet }) => {
  //     onSet(registerUserSelection);
  //   },
  // ],
});

const key = "selectedUser";

const registerUserSelection = async (
  userId: number | undefined
): Promise<void> => {
  console.log("=======");

  if (userId === undefined) {
    await chrome.storage.sync.remove(key);
  } else {
    await chrome.storage.sync.set({ [key]: userId });
  }
};
