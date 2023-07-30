import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './src/components/Loading';
import { Menu } from './src/screens/menu';
import { Conferir } from './src/screens/conferir';
import { useFonts } from 'expo-font';



export default function App() {
  return (
    <NativeBaseProvider>
      <Conferir/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
