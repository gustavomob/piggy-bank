import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Home
      </Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
