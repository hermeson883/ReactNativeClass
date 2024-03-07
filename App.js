import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Hermeson' />
      <Button title='Skills' />
      <Button title='Languages' />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "sans-serif",
    display: 'flex',
    backgroundColor: '#000',
    justifyContent: "center",
    flexDirection: "row",
    alignItems: 'center',
    height: "100%",
    gap: 10 
  },
  
});

