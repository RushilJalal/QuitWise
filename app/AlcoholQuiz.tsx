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
    question: "How often do you have a drink containing alcohol?",
    options: [
      "Never",
      "Monthly or less",
      "2-4 times a month",
      "2-3 times a week",
      "4 or more times a week",
    ],
    points: [0, 1, 2, 3, 4],
  },
  {
    question:
      "How many drinks containing alcohol do you have on a typical day when you are drinking?",
    options: ["1 or 2", "3 or 4", "5 or 6", "7, 8, or 9", "10 or more"],
    points: [0, 1, 2, 3, 4],
  },
  {
    question: "How often do you have six or more drinks on one occasion?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
    points: [0, 1, 2, 3, 4],
  },
  {
    question:
      "How often during the last year have you found that you were not able to stop drinking once you had started?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
    points: [0, 1, 2, 3, 4],
  },
  {
    question:
      "How often during the last year have you failed to do what was normally expected from you because of drinking?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
    points: [0, 1, 2, 3, 4],
  },
  {
    question:
      "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
    points: [0, 1, 2, 3, 4],
  },
  {
    question:
      "How often during the last year have you had a feeling of guilt or remorse after drinking?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
    points: [0, 1, 2, 3, 4],
  },
  {
    question:
      "How often during the last year have you been unable to remember what happened the night before because you had been drinking?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
    points: [0, 1, 2, 3, 4],
  },
  {
    question:
      "Have you or someone else been injured as a result of your drinking?",
    options: [
      "No",
      "Yes, but not in the last year",
      "Yes, during the last year",
    ],
    points: [0, 2, 4],
  },
  {
    question:
      "Has a relative or friend, or a doctor or another health worker been concerned about your drinking or suggested you cut down?",
    options: [
      "No",
      "Yes, but not in the last year",
      "Yes, during the last year",
    ],
    points: [0, 2, 4],
  },
];

const AlcoholQuiz: React.FC = () => {
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
  },
});

export default AlcoholQuiz;
