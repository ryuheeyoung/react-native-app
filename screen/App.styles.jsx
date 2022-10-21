import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "Wrap",
  },
  headerContainer: {
    flex: 1,
    innerWidth: "100%",
    marginTop: StatusBar.currentHeight + 45 || 45,
  },
  bodyContainer: {
    flex: 4,
  },
  footerContainer: {
    flex: 2,
  },
});
