import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import ButtonLink from "@/components/ButtonLink";
import ButtonContainer from "@/components/ButtonContainer";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ButtonContainer>
        <ButtonLink
          href="/EpigeneticAwareness"
          imageSource={require("../../assets/epigenetic awareness.png")}
        />
        <ButtonLink
          href="/VRTherapy"
          imageSource={require("../../assets/vr therapy.png")}
        />
        <ButtonLink
          href="/AlcoholRecovery"
          imageSource={require("../../assets/alcohol recovery.png")}
        />
        <ButtonLink
          href="/SmokingCessation"
          imageSource={require("../../assets/smoking cessation.png")}
        />
        <ButtonLink
          href="/MentalHealthSupport"
          imageSource={require("../../assets/mental health support.png")}
        />
        <ButtonLink
          href="/ProgressTracking"
          imageSource={require("../../assets/progress tracking.png")}
        />
      </ButtonContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
