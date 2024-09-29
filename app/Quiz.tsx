import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { quizData } from "../data/quizData";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [correctOptionIndex, setCorrectOptionIndex] = useState<number | null>(
    null
  );
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);

  const handleOptionPress = (
    selectedOption: string,
    optionIndex: number
  ): void => {
    if (optionSelected) return;

    const currentQuestion = quizData[currentQuestionIndex];
    const correctIndex = currentQuestion.options.indexOf(
      currentQuestion.answer
    );

    setSelectedOptionIndex(optionIndex);
    setCorrectOptionIndex(correctIndex);

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    setOptionSelected(true);

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(null);
        setCorrectOptionIndex(null);
        setOptionSelected(false);
      } else {
        setShowResult(true);
      }
    }, 1000); // Delay to show the color change before moving to the next question
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Quiz Completed!</Text>
        <Text style={styles.resultText}>
          Your Score: {score}/{quizData.length}
        </Text>
      </View>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}></View>
        <View style={styles.questionContainer}>
          <View style={styles.questionTop}>
            <Text style={styles.questionNumber}>
              Question {currentQuestionIndex + 1}/{quizData.length}
            </Text>
            <View style={styles.symbolContainer}>
              <Text style={styles.symbolText}>✅ {correctCount}</Text>
              <Text style={styles.symbolText}>❌ {incorrectCount}</Text>
            </View>
          </View>
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
              style={[
                styles.option,
                {
                  backgroundColor:
                    selectedOptionIndex === index
                      ? selectedOptionIndex === correctOptionIndex
                        ? "green"
                        : "red"
                      : correctOptionIndex === index
                      ? "green"
                      : "white",
                },
              ]}
              onPress={() => handleOptionPress(option, index)}
              disabled={optionSelected} // Disable the button if an option has been selected
            >
              <Text
                style={[
                  styles.optionText,
                  {
                    color:
                      selectedOptionIndex === index ||
                      correctOptionIndex === index
                        ? "white"
                        : "#3d3d3d",
                  },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  symbolContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbolText: {
    fontSize: 16, // Make the text smaller
    marginHorizontal: 5, // Adjust margin to make it more compact
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  questionContainer: {
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  question: {
    display: "flex",
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#737272",
    borderWidth: 5,
    borderRadius: 15,
    padding: 30,
    marginBottom: 12, // Add margin to create a gap between the question box and the line beneath it
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
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  questionTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Quiz;
