import { useAtom } from "jotai";
import { Text, View } from "react-native";

import { atomHateColor, atomLikeColor } from "../../store/atomColor";
import { itemStyles, styles } from "./Palette.styles";

const Palette = ({ id, colors }) => {
  const [like, setLike] = useAtom(atomLikeColor);
  const [hate, setHate] = useAtom(atomHateColor);
  const onPress = (id) => {
    const [type, key] = id.split("-");
    if (type === "like") {
      const tmp_like = [...like];
      tmp_like.splice(+key, 1);

      setLike(tmp_like);
    } else {
      const tmp_hate = [...hate];
      tmp_hate.splice(+key, 1);

      setHate(tmp_hate);
    }
  };

  return (
    <View style={styles.paletteContainer}>
      {colors.map((c, i) => (
        <View key={`${i}-${c}`} style={itemStyles(c).item}></View>
      ))}
      <Text style={styles.delButton} onPress={() => onPress(id)}>
        x
      </Text>
    </View>
  );
};

export default Palette;
