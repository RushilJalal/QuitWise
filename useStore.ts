import { create } from "zustand";

interface StoreState {
  lastDrinkTime: Date | null;
  elapsedDrinkTime: number;
  progress: number;
  longestStreak: number;
  setLastDrinkTime: (time: Date) => void;
  setElapsedDrinkTime: (time: number) => void;
  setProgress: (progress: number) => void;
  setLongestStreak: (streak: number) => void;
}

const useStore = create<StoreState>((set) => ({
  lastDrinkTime: null,
  elapsedDrinkTime: 0,
  progress: 0,
  longestStreak: 0,
  setLastDrinkTime: (time) => set({ lastDrinkTime: time }),
  setElapsedDrinkTime: (time) => set({ elapsedDrinkTime: time }),
  setProgress: (progress) => set({ progress }),
  setLongestStreak: (streak) => set({ longestStreak: streak }),
}));

export default useStore;
