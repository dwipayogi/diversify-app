import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="flex h-full items-center justify-center">
      <Text className="text-lg font-bold">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Pressable onPress={() => router.push("/login")}>
        <Text className="text-blue-600">Go to Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}
