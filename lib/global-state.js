import create from "zustand";

export const useGlobalState = create((set) => ({
	loadingState: true,
	toggleLoadingState: () => set((state) => ({ loadingState: !state.loadingState }))
}));
