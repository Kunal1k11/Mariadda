import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Cover = ({ user }) => {
  return (
    <View style={styles.cover}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1563748415118-f5214efd4bcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        }}
        style={styles.coverImage}
      />
      <View style={styles.updateCover}>
        <FontAwesome name="image" size={20} color="white" />
        <Text style={styles.updateCoverText}>Cover</Text>
      </View>
    </View>
  );
};

export default Cover;

const styles = StyleSheet.create({
  cover: {
    position: "relative"
  },
  coverImage: {
    width: "100%",
    height: 90
  },
  updateCoverText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 5
  },
  updateCover: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    right: 30,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "rgba(61, 61, 61, 0.3)" 
  }
});
