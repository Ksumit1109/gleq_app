import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function Details() {
  return (
    <>
      <Stack.Screen options={{ title: "Back" }} />
      <View className="flex-1 justify-center items-center bg-background">
        <Text className="text-foreground text-xl">
          This is the Details Page
        </Text>
        <Text className="text-gray-500 mt-2">
          Notice the back button above 👆
        </Text>
      </View>
    </>
  );
}
