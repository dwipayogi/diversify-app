import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView className="p-4">
      <ScrollView className="space-y-12" indicatorStyle="white">
        <View>
          <Text className="text-lg">Halo Dahlan</Text>
          <Text className="text-base">Jakarta Selatan</Text>
        </View>

        <View>
          <Link href="/login">Login</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
