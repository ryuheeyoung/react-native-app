import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, View } from "react-native";
import Buttons from "./Buttons";
import { styles } from "./Main.styles";
import MyColor from "./MyColor";

const Main = ({ navigation }) => {
  const [mix, setMix] = useState(null);

  const onPress = () => {
    setMix(true);
  };

  const onFinish = () => {
    setMix(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button
          onPress={() => navigation.navigate("Collect")}
          title="저장된 컬러보기"
        ></Button>
      </View>
      <View style={styles.bodyContainer}>
        <MyColor mix={mix} length={4} onFinish={onFinish} />
        <Buttons />
      </View>
      <View style={styles.footerContainer}>
        <Button onPress={onPress} title="오늘의 컬러 추천"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Main;
