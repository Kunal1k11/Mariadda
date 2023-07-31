import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const PostUpload = ({ user, navigation, page }) => {
  return (
    <View style={styles.uploadPost}>
      <TouchableOpacity onPress={() =>navigation.navigate("MyProfile")}>
        <Image source={{ uri: user?.picture }} style={styles.postImage} />
      </TouchableOpacity>
      <Text
        style={styles.uploadText}
        onPress={() => navigation.navigate("UploadPost", { page })}
      >
        What's going on?
      </Text>
      <View style={styles.uploadIcons}>
        <MaterialCommunityIcons
          name="video-account"
          size={24}
          color="red"
          style={styles.video}
        />
        <FontAwesome
          name="camera"
          size={24}
          color="#05bf02"
          style={styles.camera}
        />
      </View>
    </View>
  );
};

export default PostUpload;

const styles = StyleSheet.create({
  uploadPost: {
    backgroundColor: "#2d2e2e",
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    marginTop: -17,
    paddingLeft: 10
  },
  postImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginLeft: 10,
    resizeMode: "cover"
  },
  uploadText: {
    color: "#fff",
    fontWeight: 700,
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: "#3f3f40",
    marginLeft: 18
  },
  uploadIcons: {
    marginHorizontal: 10,
    flexDirection: "row"
  },
  video: {
    backgroundColor: "rgba(255,0,0,0.3)",
    padding: 8,
    borderRadius: 30
  },
  camera: {
    backgroundColor: "rgba(0,255,0,0.2)",
    padding: 8,
    borderRadius: 30,
    marginLeft: 10
  }
});
