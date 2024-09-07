import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  userName: string | null;
  setUserName: (userName: string | null) => void;
}

const useAuthStore = create(
  persist<IUser>(
    (set) => ({
      userName: null,
      setUserName: (userName: string | null) => set(() => ({ userName })),
    }),
    {
      name: "authStorage",
    },
  ),
);

export default useAuthStore;
