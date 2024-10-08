import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const users = [
  { id: "1", name: "Anaadhi Mongia", points: 150 },
  { id: "2", name: "Rohit Tomer", points: 110 },
  { id: "3", name: "Swayam Kumar", points: 100 },
  { id: "4", name: "Navya Gupta", points: 90 },
  { id: "5", name: "Rushil Jalal", points: 80 },
  { id: "6", name: "Devarshi Singhal", points: 74 },
];

const LeaderboardScreen: React.FC = () => {
  const renderItem = ({
    item,
    index,
  }: {
    item: { id: string; name: string; points: number };
    index: number;
  }) => {
    let backgroundColor;
    if (index === 0) {
      backgroundColor = "#FFD700"; // Gold
    } else if (index === 1) {
      backgroundColor = "#C0C0C0"; // Silver
    } else if (index === 2) {
      backgroundColor = "#CD7F32"; // Bronze
    } else {
      backgroundColor = "#fff"; // Default
    }

    return (
      <View style={[styles.item, { backgroundColor }]}>
        <Text style={styles.name}>{index + 1}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.points}>{item.points} pts</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  points: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default LeaderboardScreen;
