import { View, Text, Image } from "react-native";
import React from "react";
import { Avatar } from "heroui-native";
import { Ionicons } from "@expo/vector-icons";

export default function TopNavBar() {
  return (
    <View className="flex-row w-full items-center justify-between gap-2">
      {/* Logo Image */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        className="w-10 h-10 rounded-full bg-red-300"
        resizeMode="contain"
      />

      {/* App Name / Title */}
      <View>
        <Avatar alt="login" size="sm">
          <Avatar.Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Avatar.Fallback>
            <Ionicons name="person" size={18} />
          </Avatar.Fallback>
        </Avatar>
      </View>
    </View>
  );
}
