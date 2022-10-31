import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  paletteContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 1,
    padding: 10,
    flexBasis: 45,
    flexGrow: 0,
  },
  delButton: {
    flex: 1,
    flexBasis: 25,
    flexGrow: 0,
    textAlign: "center",
    lineHeight: "1.5em",
    cursor: "default",
  },
});
const itemStyles = (color) =>
  StyleSheet.create({
    item: {
      flex: 5,
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: color,
      flexBasis: 25,
      flexGrow: 0,
    },
  });

export { styles, itemStyles };
