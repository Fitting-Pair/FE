import { create } from "zustand";
import { ILoading } from "@/types/store";

const useLoadingStore = create<ILoading>((set) => ({
  loading: false,

  setLoading: (loading) =>
    set(() => ({
      loading: loading,
    })),
}));

export default useLoadingStore;
