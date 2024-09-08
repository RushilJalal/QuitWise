import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { quizData } from "../data/quizData";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionPress = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz completed!");
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.progressText}>
        Question {currentQuestionIndex + 1}/{quizData.length}
      </Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <View
        style={{
          height: 6,
          backgroundColor: "#727272",
          marginBottom: 10,
          borderRadius: 10,
        }}
      />
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={handleOptionPress}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  progressText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "left",
  },
  questionContainer: {
    marginTop: 100,
    padding: 50,
    // backgroundColor: "#f9f9f9",
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
    justifyContent: "center",
    alignContent: "center",
  },
  question: {
    display: "flex",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#737272",
    borderWidth: 5,
    borderRadius: 15,
    padding: 30,
  },
  option: {
    padding: 12,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: "center",
    borderColor: "#14d9c5",
    borderWidth: 5,
  },
  optionText: {
    fontSize: 18,
    color: "#3d3d3d",
    fontWeight: "bold",
  },
});

export default Quiz;
