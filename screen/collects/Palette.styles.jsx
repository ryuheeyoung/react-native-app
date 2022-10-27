import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  paletteContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 0.5,
    padding: 10,
    flexBasis: 45,
    flexGrow: 0,
  },
});
const itemStyles = (color) =>
  StyleSheet.create({
    item: {
      flex: 1,
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: color,
      flexBasis: 25,
      flexGrow: 0,
    },
  });

export { styles, itemStyles };
