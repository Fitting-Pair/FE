import { create } from "zustand";
import { TLoading } from "@/types/store";

const useLoadingStore = create<TLoading>((set) => ({
  loading: false,

  setLoading: (loading) =>
    set(() => ({
      loading: loading,
    })),
}));

export default useLoadingStore;
