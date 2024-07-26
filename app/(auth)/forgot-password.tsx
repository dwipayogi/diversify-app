import { Text, TextInput, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import React from "react";

const ForgotPassword = () => {
  return (
    <SafeAreaView className="justify-center h-[50vh] p-4">
      <View className="gap-y-8">
        <View>
          <Text className="text-4xl font-bold text-blue-500">
            Lupa Kata Sandi
          </Text>
          <Text className="text-xl">Masukkan email yang digunakan pada akunmu</Text>
        </View>

        <View className="w-full space-y-2">
          <Text className="text-blue-500 text-lg">Email</Text>
          <TextInput
            className="border rounded-lg p-2 text-xl"
            placeholder="cth. dahlan@gmail.com"
          />
        </View>

        <Pressable onPress={() => router.replace("/home")}>
          <Text className="text-white bg-blue-500 rounded-lg p-2 text-xl text-center">
            Kirim
          </Text>
        </Pressable>
        
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
