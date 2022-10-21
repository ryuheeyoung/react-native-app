import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { styles } from './screen/App.styles';
import Buttons from './screen/Buttons';
import MyColor from './screen/MyColor';

export default function App() {
  const [mix, setMix] = useState(null);

  const onPress = () => {
    setMix(true);
  }

  const onFinish = () => {
    setMix(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button onPress={onPress} title={`오늘의 컬러 추천`}></Button>
      </View>
      <View style={styles.bodyContainer}>
        <MyColor mix={mix} length={4} onFinish={onFinish} />  
        <Buttons />
      </View>
      <View style={styles.footerContainer}>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

