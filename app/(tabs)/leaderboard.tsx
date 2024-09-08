import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

const DummyPage: React.FC = () => {
  return (
    <View>
      <EditScreenInfo path="/app/tabs/leaderboard.tsx" />
    </View>
  );
};

export default DummyPage;
