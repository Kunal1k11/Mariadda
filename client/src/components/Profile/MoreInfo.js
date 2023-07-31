import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const MoreInfo = () => {
  return (
    <View style={styles.moreInfo}>
      <View style={styles.moreInfoHeader}>
        <Ionicons
          name="ios-menu"
          size={24}
          color="white"
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>More Info</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.moreInforBody}>
        <Text style={styles.lineText}>
          <Text style={styles.lineTextHead}>Friendship Stigma:</Text>
          {"  "} Accepting Friend Request doesn'tmean I am intrested in chatting
          or one can tag me
        </Text>
        <Text style={styles.lineText}>
          <Text style={styles.lineTextHead}>Samarltran Value:</Text>
          {"  "} Blood Donor
        </Text>
        <Text style={styles.lineText}>
          <Text style={styles.lineTextHead}>Zodiac Sign:</Text>
          {"  "} Aries: (March 21 - April 19)
        </Text>
      </View>
    </View>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({
  moreInfo: {
    marginBottom: 60,
    width: "90%",
    marginLeft: 20,
    padding: 10,
    backgroundColor: "#2d2e2e",
    borderRadius: 10
  },
  moreInfoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10
  },
  headerIcon: {
    backgroundColor: "green",
    padding: 3,
    borderRadius: 50
  },
  headerText: {
    color: "#fff",
    marginLeft: 10
  },
  line: {
    width: "95%",
    height: 1,
    backgroundColor: "#575958",
    marginLeft: 10,
    marginVertical: 15
  },
  lineText: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 5
  },
  lineTextHead: {
    fontWeight: 600,
    fontSize: 15
  },
  moreInforBody: {
    marginLeft: 20
  }
});
