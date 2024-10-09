import { useState } from "react";
import { TextInput } from "react-native";

const DailyConsumption: React.FC = () => {
  const [consumption, setConsumption] = useState("");

  const handleInputChange = (value: string) => {
    setConsumption(value);
  };

  return (
    <TextInput
      placeholder="Daily Consumption"
      value={consumption}
      onChangeText={handleInputChange}
    />
  );
};

export default DailyConsumption;
