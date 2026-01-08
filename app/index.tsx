import CardExapmle from "@/components/cardExapmle";
import { Button } from "heroui-native";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Button variant="secondary" onPress={() => console.log("Pressed!")}>
        <Text>Get Started</Text>
      </Button>
      <CardExapmle />
    </View>
  );
}
