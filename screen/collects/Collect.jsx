import { useAtom } from "jotai";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { atomHateColor, atomLikeColor } from "../../store/atomColor";
import { styles } from "./Collect.styles";
import Palette from "./Palette";

const Collect = () => {
  const [like] = useAtom(atomLikeColor);
  const [hate] = useAtom(atomHateColor);

  return (
    <View style={styles.collectContainer}>
      <View style={styles.likeContainer}>
        <Text>좋아요</Text>
        {like &&
          like.map((list, i) => <Palette key={`like-${i}`} colors={list} />)}
      </View>
      <View style={styles.hateContainer}>
        <Text>싫어요</Text>
        {hate &&
          hate.map((list, i) => <Palette key={`hate-${i}`} colors={list} />)}
      </View>
    </View>
  );
};

export default Collect;
