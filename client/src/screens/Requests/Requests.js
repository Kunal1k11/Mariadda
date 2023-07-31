import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNav from "../../components/BottomNav";
import { AntDesign } from "@expo/vector-icons";

const Requests = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.requestHeader}>Requests</Text>
        <View style={styles.requests}>
          <View style={styles.noRequests}>
            <AntDesign
              name="deleteuser"
              size={30}
              color="#e134eb"
              style={styles.personIcon}
            />
            <Text style={styles.noRequestText}>
              You do not have any requests
            </Text>
          </View>
        </View>
      </View>
      <BottomNav navigation={navigation} page={"Requests"} />
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#44f205",
    width: "100%",
    height: "100%"
  },
  body: {
    width: "100%",
    height: "97%",
    marginTop: 30,
    backgroundColor: "#232324"
  },
  requestHeader: {
    fontSize: 25,
    fontWeight: 600,
    color: "white",
    margin: 10
  },
  noRequests: {
    width: "100%",
    alignItems: "center",
    marginTop: 50
  },
  personIcon: {
    backgroundColor: "#fcedfa",
    padding: 20,
    borderRadius: 50,
    fontWeight: 600
  },
  noRequestText: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    marginTop: 10
  }
});
