import { create } from "zustand";

interface StoreState {
  lastDrinkTime: Date | null;
  elapsedDrinkTime: number;
  progress: number;
  longestStreak: number;

  lastSmokeTime: Date | null;
  elapsedSmokeTime: number;
  smokeProgress: number;
  longestSmokeStreak: number;

  dailyConsumption: number;
  moneySaved: number; // Add moneySaved to the interface

  setLastDrinkTime: (time: Date) => void;
  setElapsedDrinkTime: (time: number) => void;
  setProgress: (progress: number) => void;
  setLongestStreak: (streak: number) => void;

  setLastSmokeTime: (time: Date) => void;
  setElapsedSmokeTime: (time: number) => void;
  setSmokeProgress: (progress: number) => void;
  setLongestSmokeStreak: (streak: number) => void;
  setMoneySaved: (saved: number) => void; // Add setMoneySaved to the interface
}

const useStore = create<StoreState>((set) => ({
  lastDrinkTime: null,
  elapsedDrinkTime: 0,
  progress: 0,
  longestStreak: 0,

  lastSmokeTime: null,
  elapsedSmokeTime: 0,
  smokeProgress: 0,
  longestSmokeStreak: 0,

  dailyConsumption: 10,
  moneySaved: 0, // Initialize moneySaved

  setLastDrinkTime: (time) => set({ lastDrinkTime: time }),
  setElapsedDrinkTime: (time) => set({ elapsedDrinkTime: time }),
  setProgress: (progress) => set({ progress }),
  setLongestStreak: (streak) => set({ longestStreak: streak }),

  setLastSmokeTime: (time: Date) => set({ lastSmokeTime: time }),
  setElapsedSmokeTime: (time: number) => set({ elapsedSmokeTime: time }),
  setSmokeProgress: (progress: number) => set({ smokeProgress: progress }),
  setLongestSmokeStreak: (streak: number) =>
    set({ longestSmokeStreak: streak }),
  setMoneySaved: (saved) => set({ moneySaved: saved }), // Define setMoneySaved
}));

export default useStore;
