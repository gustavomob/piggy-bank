import { fontFamily } from "@/theme/fontFamily";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 20, gap: 10 }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: fontFamily.bold,
          textAlign: "center",
        }}
      >
        PIGGY BANK
      </Text>

      <Button title="Home" onPress={() => router.navigate("/home")} />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transaction/566")}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/12")}
      />
    </View>
  );
}
