import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <View style={styles.container}>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
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
