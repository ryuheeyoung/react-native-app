import { useAtom } from "jotai";
import { Button, View } from "react-native";
import { atomColor, atomHateColor, atomLikeColor } from "../../store/atomColor";
import { styles } from "./Buttons.styles";

const Buttons = () => {
  const [color] = useAtom(atomColor);
  const [like, setLike] = useAtom(atomLikeColor);
  const [hate, setHate] = useAtom(atomHateColor);

  const onPress = (type) => {
    if (color.length) {
      const clr = color.map(({ color }) => color);
      if (type === "like") {
        setLike([...like, [...clr]]);
      } else {
        setHate([...hate, [...clr]]);
      }
    }
  };

  return (
    <View style={styles.choiceContainer}>
      <Button onPress={() => onPress("like")} title="좋아요"></Button>
      <Button onPress={() => onPress("hate")} title="별로에요"></Button>
    </View>
  );
};

export default Buttons;
