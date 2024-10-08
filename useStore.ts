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
  drinkWeeklyConsumption: number;
  moneySaved: number; // Add moneySaved to the interface
  username: string;

  points: number;
  questionsAnswered: number;
  factsRead: number;
  avatarSrc: string; // Add avatarSrc to the interface

  setLastDrinkTime: (time: Date) => void;
  setElapsedDrinkTime: (time: number) => void;
  setProgress: (progress: number) => void;
  setLongestStreak: (streak: number) => void;

  setLastSmokeTime: (time: Date) => void;
  setElapsedSmokeTime: (time: number) => void;
  setSmokeProgress: (progress: number) => void;
  setLongestSmokeStreak: (streak: number) => void;
  setMoneySaved: (saved: number) => void; // Add setMoneySaved to the interface
  setUsername: (username: string) => void;

  setquestionsAnswered: (questionsAnswered: number) => void;
  setfactsRead: (factsRead: number) => void;

  incrementPoints: (value: number) => void; // Add incrementPoints method
  incrementQuestionsAnswered: (value: number) => void;
  incrementFactsRead: (value: number) => void;

  setAvatarSrc: (src: string) => void; // Add setAvatarSrc to the interface
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
  drinkWeeklyConsumption: 5,
  moneySaved: 0, // Initialize moneySaved
  username: "Rushil Jalal",
  avatarSrc: "assets/avatars/whiteman.png", // Initialize avatarSrc
  points: 0, // Initialize points
  questionsAnswered: 0, // Initialize questionsAnswered
  factsRead: 0, // Initialize factsRead

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
  setUsername: (username) => set({ username }),

  setquestionsAnswered: (questionsAnswered) => set({ questionsAnswered }),
  setfactsRead: (factsRead) => set({ factsRead }),
  incrementPoints: (value) =>
    set((state) => ({ points: state.points + value })), // Implement incrementPoints
  incrementQuestionsAnswered: (value) =>
    set((state) => ({ questionsAnswered: state.questionsAnswered + value })),
  incrementFactsRead: (value) =>
    set((state) => ({ factsRead: state.factsRead + value })),
  setAvatarSrc: (src) => set({ avatarSrc: src }), // Implement setAvatarSrc
}));

export default useStore;
