import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./MyColor.styles";

const MyColor = ({ mix = false, length = 4, onFinish = () => void 0 }) => {
  const [data, setData] = useState();

  const getColor = () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += (~~(Math.random() * 0xf)).toString(16);
    }

    return hex;
  };

  const changeRgb = (color) => {
    const hex = color.split("#")[1]; // '#' 제거
    let rgb = [];

    for (let i = 0; i < hex.length; i += 2) {
      const color = hex.slice(i, i + 2);
      rgb.push(parseInt(color, 16));
    }

    return `rgb(${rgb.join(", ")})`;
  };

  const renderItem = ({ item }) => (
    <View style={styles(item.color).item}>
      <Text style={styles().title}>{item.color}</Text>
      <Text style={styles().title}>{changeRgb(item.color)}</Text>
    </View>
  );

  useEffect(() => {
    if (mix && length) {
      const colors = [];
      for (let i = 0; i < length; i++) {
        const color = getColor();
        colors.push({ id: i + 1, color });
      }
      setData(colors);
    }
  }, [mix, length]);

  useLayoutEffect(() => {
    onFinish();
  });

  return (
    <View style={styles().container}>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      )}
    </View>
  );
};

export default MyColor;
