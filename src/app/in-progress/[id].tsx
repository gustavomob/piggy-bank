import { Text, View, Button } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{params.id}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
