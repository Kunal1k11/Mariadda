import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text>MainPage</Text>
    </View>
  );
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
});
