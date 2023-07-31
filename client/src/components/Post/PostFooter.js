import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import color from "../../../assets/images/color.png";
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  AntDesign,
  Feather,
  Fontisto
} from "@expo/vector-icons";
import { firebase } from "../../Firebase/Config";
import * as ImagePicker from "expo-image-picker";

const PostFooter = ({ setPost }) => {
  const [loading, setLoading] = useState(false);
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
      });
      if (!result.canceled) {
        const uri = result.assets[0].uri;
        if (uri) {
          const imageUrl = await uploadImageToFirebase(uri);
          setLoading(false);
          setPost(imageUrl);
          //  console.log("Image uploaded successfully. Download URL:", imageUrl);
        } else {
          setLoading(false);
          setPost(null);
          alert("Failed to Upload");
          //  console.log("Failed to upload image to Firebase Storage.");
        }
      } else {
        setLoading(false);
        setPost(null);
        alert("No image selected");
      }
    } catch (error) {
      console.error("Error picking image: ", error);
      return null;
    }
  };
  const uploadImageToFirebase = async (uri) => {
    try {
      const blob = await getBlobFroUri(uri);
      const filename = uri.substring(uri);
      const storageRef = firebase.storage().ref();
      const upload = storageRef.child(filename);
      await upload.put(blob);
      await upload.getDownloadURL().then((url) => {
        URL = url;
      });
      return URL;
    } catch (error) {
      console.error("Error uploading image to Firebase: ", error);
      return null;
    }
  };
  const getBlobFroUri = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    return blob;
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottom1}>
        <View style={styles.bottom1Left}>
          <Image source={color} style={styles.color} />
          <MaterialIcons name="language" size={20} color="white" />
          <Text style={styles.bottom1LeftText}>Everyone</Text>
          <Ionicons name="md-trash-bin" size={18} color="red" />
          <Entypo name="download" size={18} color="green" />
        </View>
        <View style={styles.bottom1Right}>
          <Text style={styles.bottom1RightText}>#</Text>
          <Text style={styles.bottom1RightText}>@</Text>
          <AntDesign
            name="smileo"
            size={16}
            color="#fff"
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
      <View style={styles.line} />
      <ScrollView style={styles.bottom2} horizontal={true}>
        <MaterialIcons
          name="add-photo-alternate"
          size={24}
          color="green"
          style={styles.bottom2ICon}
          onPress={() => pickImage()}
        />
        <Feather
          name="video"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <MaterialIcons
          name="gif"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <Ionicons
          name="mic"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <Fontisto
          name="smiley"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <MaterialIcons
          name="upload-file"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <Entypo
          name="shop"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <MaterialIcons
          name="bar-chart"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <Feather
          name="send"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
        <Ionicons
          name="musical-notes-outline"
          size={24}
          color="green"
          style={styles.bottom2ICon}
        />
      </ScrollView>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  bottom1: {
    padding: 10
  },
  color: {
    width: 20,
    height: 20
  },
  bottom1: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottom1Left: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    justifyContent: "space-between",
    marginLeft: 20
  },
  bottom1LeftText: {
    marginLeft: -10,
    color: "#fff",
    fontSize: 15
  },
  bottom1Right: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10
  },
  bottom1RightText: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 7
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#575958",
    marginVertical: 10
  },
  bottom2: {
    marginHorizontal: 15
  },
  bottom2ICon: {
    padding: 5,
    paddingLeft: 7,
    borderRadius: 10,
    backgroundColor: "#9eb5a6",
    marginHorizontal: 10
  }
});
