import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import ButtonContainer from "@/components/ButtonContainer";
import ButtonLink from "@/components/ButtonLink";

export default function CallScreen() {
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
