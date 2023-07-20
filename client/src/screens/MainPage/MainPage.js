import { StyleSheet, Text, View } from "react-native";
import React from "react";
import mariaddalogo from "../../../assets/images/mariaddalogo.png";
const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image sourcer={mariaddalogo} style={styles.logo} />
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
});
