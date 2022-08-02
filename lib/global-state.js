import create from "zustand";

export const globalState = create((set) => ({
	loadingState: true,
	toggleLoadingState: () => set((state) => ({ loadingState: !state.loadingState }))
}));
