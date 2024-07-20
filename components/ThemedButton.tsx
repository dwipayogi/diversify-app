import {
  Pressable,
  type PressableProps,
  Text,
  StyleSheet,
} from "react-native";
import { colors } from "@/constant/colors";

export type ThemedButtonProps = PressableProps & {
  type?: "primary" | "secondary" | "outline" | "warning" | "destructive";
  text: string;
};

export function ThemedButton({
  type = "primary",
  text,
  ...rest
}: ThemedButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        type === "primary" ? styles.primary : undefined,
        type === "secondary" ? styles.secondary : undefined,
        type === "outline" ? styles.outline : undefined,
        type === "warning" ? styles.warning : undefined,
        type === "destructive" ? styles.destructive : undefined,
      ]}
      {...rest}
    >
      <Text style={{ color: type === "outline" ? "#3375F1" : "white" }}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  warning: {
    backgroundColor: colors.warning,
  },
  destructive: {
    backgroundColor: colors.destructive,
  },
});
