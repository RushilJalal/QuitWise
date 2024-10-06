import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const saveStreaks = async (
  userId: string,
  longestStreak: number,
  longestSmokeStreak: number
) => {
  try {
    await setDoc(
      doc(db, "users", userId),
      {
        longestStreak,
        longestSmokeStreak,
      },
      { merge: true }
    );
    console.log("Streaks saved successfully");
  } catch (e) {
    console.error("Error saving streaks: ", e);
  }
};
