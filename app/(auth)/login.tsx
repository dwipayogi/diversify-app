import { Text, TextInput, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import React from "react";

const Login = () => {
  return (
    <SafeAreaView className="justify-center h-[70vh] p-4">
      <View className="gap-y-8">
        <View>
          <Text className="text-4xl font-bold text-blue-500">
            Selamat Datang,
          </Text>
          <Text className="text-xl">Silakan masuk untuk melanjutkan!</Text>
        </View>

        <View className="w-full space-y-2">
          <Text className="text-blue-500 text-lg">Email</Text>
          <TextInput
            className="border rounded-lg p-2 text-xl"
            placeholder="cth. dahlan@gmail.com"
          />
        </View>

        <View className="w-full space-y-2">
          <Text className="text-blue-500 text-xl">Kata Sandi</Text>
          <TextInput
            className="border rounded-lg p-2 text-xl"
            placeholder="masukkan kata sandi anda"
            secureTextEntry
          />
        </View>

        <Link href="/forgot-password" asChild>
          <Text className="text-blue-500 text-right">Lupa kata sandi?</Text>
        </Link>

        <Pressable onPress={() => router.replace("/home")}>
          <Text className="text-white bg-blue-500 rounded-lg p-2 text-xl text-center">
            Masuk
          </Text>
        </Pressable>

        <Text className="text-center text-lg">
          Belum punya akun?
          <Link href="/register" asChild>
            <Text className="text-blue-500 font-semibold"> Daftar</Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
