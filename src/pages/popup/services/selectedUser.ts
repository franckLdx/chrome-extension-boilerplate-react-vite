import { atom, useRecoilState } from "recoil";

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
  effects_UNSTABLE: [
    ({ onSet, resetSelf }) => {
      onSet((newId, oldId) => {
        if (newId === oldId) {
          resetSelf();
        }
      });
    },
  ],
});

const key = "selectedUser";

export const toggleUserSelection = async (id: number) => {
  const oldSelectedUser = await chrome.storage.sync.get(key);
  if (oldSelectedUser.selectedUser === id) {
    await chrome.storage.sync.remove(key);
  } else {
    await chrome.storage.sync.set({ [key]: id });
  }
};
