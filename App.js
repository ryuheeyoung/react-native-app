import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
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
      <MyColor mix={mix} length={4} onFinish={onFinish} />  
      <View style={styles.btnContainer}>
        <Button onPress={onPress} title={`오늘의 컬러 추천`}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 2
  }
});
