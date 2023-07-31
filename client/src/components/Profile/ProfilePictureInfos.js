import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
  MaterialIcons
} from "@expo/vector-icons";

const ProfilePictureInfos = ({ user }) => {
  // console.log(user)
  return (
    <View style={styles.profileInfo}>
      <View style={styles.profileInfoImage}>
        <View style={styles.profileInfoImageLeft}>
          <Image source={{ uri: user?.picture }} style={styles.profileImage} />
          <AntDesign
            name="camerao"
            size={24}
            color="#fff"
            style={styles.camera}
          />
        </View>
        <Ionicons
          name="analytics"
          size={24}
          color="#fff"
          style={styles.analytics}
        />
      </View>
      <View style={styles.profileInfoDetails}>
        <Text style={styles.fullname}>
          <Text style={styles.username}>@{user?.username}</Text>
          {"  "}
          <SimpleLineIcons name="badge" size={19} color="#b5b5b5" />
        </Text>
      </View>
      <View style={styles.tags}>
        <View style={styles.tag}>
          <FontAwesome5 name="user-tag" size={17} color="#fff" />
          <Text style={styles.tagtext}>Encomium</Text>
        </View>
        <View style={styles.tag}>
          <MaterialIcons name="edit" size={17} color="#fff" />
          <Text style={styles.tagtext}>Edit</Text>
        </View>
        <View style={styles.tag}>
          <Ionicons name="menu" size={17} color="#fff" />
          <Text style={styles.tagtext}>Activites</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilePictureInfos;

const styles = StyleSheet.create({
  profileInfo: {
    backgroundColor: "#2d2e2e"
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginLeft: 10,
    resizeMode: "cover",
    borderWidth: 5,
    borderColor: "#232324"
  },
  profileInfoImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profileInfoImageLeft: {
    width: 120,
    marginTop: -30,
    marginLeft: 10
  },
  camera: {
    position: "absolute",
    bottom: 8,
    right: 8,
    padding: 5,
    borderRadius: 50,
    backgroundColor: "rgba(61, 61, 61, 0.3)"
  },
  analytics: {
    marginRight: 20,
    padding: 5,
    borderRadius: 50,
    backgroundColor: "rgba(69, 68, 68, 0.5)"
  },
  profileInfoDetails: {
    width: "70%",
    marginHorizontal: 30,
    marginTop: 20
  },
  fullname: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 600
  },
  tagtext: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    marginLeft: 5
  },
  tag: {
    flexDirection: "row",
    backgroundColor: "#565657",
    margin: 5,
    padding: 8,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  tags: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 25
  }
});
