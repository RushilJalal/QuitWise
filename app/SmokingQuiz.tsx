import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const questions = [
  {
    question: "How soon after you wake up do you smoke your first cigarette?",
    options: [
      "Within 5 minutes",
      "6-30 minutes",
      "31-60 minutes",
      "After 60 minutes",
    ],
    points: [3, 2, 1, 0],
  },
  {
    question:
      "Do you find it difficult to refrain from smoking in places where it is forbidden?",
    options: ["Yes", "No"],
    points: [1, 0],
  },
  {
    question: "Which cigarette would you hate most to give up?",
    options: ["The first one in the morning", "Any other"],
    points: [1, 0],
  },
  {
    question: "How many cigarettes a day do you smoke?",
    options: ["10 or less", "11-20", "21-30", "31 or more"],
    points: [0, 1, 2, 3],
  },
  {
    question:
      "Do you smoke more frequently during the first hours after waking than during the rest of the day?",
    options: ["Yes", "No"],
    points: [1, 0],
  },
  {
    question:
      "Do you smoke even if you are so ill that you are in bed most of the day?",
    options: ["Yes", "No"],
    points: [1, 0],
  },
];

const SmokingQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showConsent, setShowConsent] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleConsent = () => {
    setShowConsent(false);
    setShowQuiz(true);
  };

  const handleClose = () => {
    Alert.alert("Thank you!", "You have chosen not to proceed.");
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setScore(score + questions[currentQuestion].points[selectedOption]);
      setSelectedOption(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowQuiz(false);
        setShowResult(true);
      }
    } else {
      Alert.alert("Please select an answer.");
    }
  };

  const renderQuestion = () => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => setSelectedOption(index)}
        >
          <Text
            style={
              selectedOption === index
                ? styles.selectedOptionText
                : styles.optionText
            }
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

  const renderResult = () => {
    let resultMessage = "";
    if (score <= 2) {
      resultMessage =
        "Low dependence. You may not need professional help, but consider reducing your smoking.";
    } else if (score <= 4) {
      resultMessage =
        "Moderate dependence. Consider seeking advice on how to reduce your smoking.";
    } else if (score <= 6) {
      resultMessage =
        "High dependence. It is advisable to seek professional help to quit smoking.";
    } else {
      resultMessage =
        "Very high dependence. Professional help is strongly recommended to quit smoking.";
    }

    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Your total score is: {score}</Text>
        <Text style={styles.resultMessage}>{resultMessage}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showConsent && (
        <View style={styles.container}>
          <Text style={styles.title}>Test Your Alcohol Consumption Status</Text>
          <Text style={styles.paragraph}>
            Welcome! This test will help you assess your alcohol consumption.
          </Text>
          <Text style={styles.paragraph}>
            By proceeding, you consent to the collection and use of your
            responses.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleConsent}>
            <Text style={styles.buttonText}>I give my consent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>No, thanks</Text>
          </TouchableOpacity>
        </View>
      )}
      {showQuiz && renderQuestion()}
      {showResult && renderResult()}
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
    display: "flex",
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
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  selectedOptionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
  },
  resultContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  resultMessage: {
    fontSize: 18,
    textAlign: "center",
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    // fontWeight: "bold",
  },
});

export default SmokingQuiz;
