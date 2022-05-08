const key = "selectedUser";

export const toggleuserSelection = async (id: number) => {
  const oldSelectedUser = await chrome.storage.sync.get(key);
  if (oldSelectedUser.selectedUser === id) {
    await chrome.storage.sync.remove(key);
  } else {
    await chrome.storage.sync.set({ [key]: id });
  }
};
