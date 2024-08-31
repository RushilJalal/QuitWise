import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import ButtonLink from "@/components/ButtonLink";
import ButtonContainer from "@/components/ButtonContainer";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ButtonContainer>
        <ButtonLink
          href="/page1"
          imageSource={require("../../assets/epigenetic awareness.png")}
        />
        <ButtonLink
          href="/page2"
          imageSource={require("../../assets/vr therapy.png")}
        />
        <ButtonLink
          href="/page3"
          imageSource={require("../../assets/alcohol recovery.png")}
        />
        <ButtonLink
          href="/page4"
          imageSource={require("../../assets/smoking cessation.png")}
        />
        <ButtonLink
          href="/page5"
          imageSource={require("../../assets/mental health support.png")}
        />
        <ButtonLink
          href="/page6"
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
