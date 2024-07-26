import { Text, TextInput, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import React from "react";

const Register = () => {
  return (
    <SafeAreaView className="justify-center h-[85vh] p-4">
      <View className="gap-y-8">
        <View>
          <Text className="text-4xl font-bold text-blue-500">
            Buat Akun
          </Text>
          <Text className="text-xl">bergabung dengan kami untuk melanjutkan</Text>
        </View>

        <View className="w-full space-y-2">
          <Text className="text-blue-500 text-lg">Nama Lengkap</Text>
          <TextInput
            className="border rounded-lg p-2 text-xl"
            placeholder="Muhammad Dahlan"
          />
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

        <View className="w-full space-y-2">
          <Text className="text-blue-500 text-xl">Konfirmasi Kata Sandi</Text>
          <TextInput
            className="border rounded-lg p-2 text-xl"
            placeholder="masukkan ulang kata sandi anda"
            secureTextEntry
          />
        </View>

        <Pressable onPress={() => router.replace("/login")}>
          <Text className="text-white bg-blue-500 rounded-lg p-2 text-xl text-center">
            Daftar
          </Text>
        </Pressable>

        <Text className="text-center text-lg">
          Sudah punya akun?
          <Link href="/login" asChild>
            <Text className="text-blue-500 font-semibold"> Masuk</Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
