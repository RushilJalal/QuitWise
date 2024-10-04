import { StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";

const LeaderboardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <EditScreenInfo path="/app/tabs/leaderboard.tsx" />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LeaderboardScreen;
