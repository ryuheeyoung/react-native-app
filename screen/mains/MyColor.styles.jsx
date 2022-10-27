import { StyleSheet } from "react-native";

export const styles = (color) =>
  StyleSheet.create({
    container: {
      flex: 2,
      marginVertical: "auto",
    },
    item: {
      backgroundColor: color || "red",
      padding: 20,
      minWidth: 100,
    },
    title: {
      textAlign: "center",
      textTransform: "uppercase",
      textShadowColor: "white",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 2,
      fontWeight: "bold",
    },
  });
