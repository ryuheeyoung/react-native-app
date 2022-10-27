import { View } from "react-native";
import { itemStyles, styles } from "./Palette.styles";

const Palette = ({ colors }) => {
  return (
    <View style={styles.paletteContainer}>
      {colors.map((c, i) => (
        <View key={`${i}-${c}`} style={itemStyles(c).item}></View>
      ))}
    </View>
  );
};

export default Palette;
