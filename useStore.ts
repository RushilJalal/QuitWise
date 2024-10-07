import { create } from "zustand";
import { auth, db } from "./config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

interface StoreState {
  lastDrinkTime: Date | null;
  elapsedDrinkTime: number;
  progress: number;
  longestStreak: number;

  lastSmokeTime: Date | null;
  elapsedSmokeTime: number;
  smokeProgress: number;
  longestSmokeStreak: number;

  setLastDrinkTime: (time: Date) => void;
  setElapsedDrinkTime: (time: number) => void;
  setProgress: (progress: number) => void;
  setLongestStreak: (streak: number) => void;

  setLastSmokeTime: (time: Date) => void;
  setElapsedSmokeTime: (time: number) => void;
  setSmokeProgress: (progress: number) => void;
  setLongestSmokeStreak: (streak: number) => void;

  // saveStreaksToFirestore: () => Promise<void>;
}

const useStore = create<StoreState>((set, get) => ({
  lastDrinkTime: null,
  elapsedDrinkTime: 0,
  progress: 0,
  longestStreak: 0,

  lastSmokeTime: null,
  elapsedSmokeTime: 0,
  smokeProgress: 0,
  longestSmokeStreak: 0,

  setLastDrinkTime: (time) => set({ lastDrinkTime: time }),
  setElapsedDrinkTime: (time) => set({ elapsedDrinkTime: time }),
  setProgress: (progress) => set({ progress }),
  setLongestStreak: (streak) => set({ longestStreak: streak }),

  setLastSmokeTime: (time: Date) => set({ lastSmokeTime: time }),
  setElapsedSmokeTime: (time: number) => set({ elapsedSmokeTime: time }),
  setSmokeProgress: (progress: number) => set({ smokeProgress: progress }),
  setLongestSmokeStreak: (streak: number) =>
    set({ longestSmokeStreak: streak }),

  // saveStreaksToFirestore: async () => {
  //   const { longestStreak, longestSmokeStreak } = get();
  //   const user = auth.currentUser;
  //   if (user) {
  //     const userRef = doc(db, "users", user.uid);
  //     try {
  //       await updateDoc(userRef, {
  //         longestStreak,
  //         longestSmokeStreak,
  //       });
  //       console.log("Streaks updated successfully");
  //     } catch (error) {
  //       console.error("Error updating streaks:", error);
  //     }
  //   }
  // },
}));

export default useStore;
