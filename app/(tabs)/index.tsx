import { Text, View } from "react-native";
import { router } from "expo-router";
import { Button } from "heroui-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background gap-4">
      <Text className="text-foreground">Home screen</Text>
      <Button onPress={() => router.push("/details")}>
        <Text>Go to Details</Text>
      </Button>
    </View>
  );
}
