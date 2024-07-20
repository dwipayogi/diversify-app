import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">
        Edit app/index.tsx to edit this screen.
      </ThemedText>
      <Link href="login">
        <ThemedText type="link">Go to Login</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
