import { Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import { Link, router } from "expo-router";

import { colors } from "@/constant/colors";

export default function Login() {
  function Login() {
    router.replace("/");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Selamat Datang</Text>
      <Text>Silakan masuk untuk melanjutkan!</Text>
      <Text>Email</Text>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} />
      <Text>Password</Text>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} />
      <ThemedButton text="masuk" onPress={Login} />
      <Text>
        Belum punya akun?
        <Link href="/register" asChild>
          <ThemedText type="link"> Daftar</ThemedText>
        </Link>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primary,
  },
});
