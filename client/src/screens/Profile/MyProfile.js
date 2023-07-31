import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Cover from "../../components/Profile/Cover";
import { useDispatch, useSelector } from "react-redux";
import ProfilePictureInfos from "../../components/Profile/ProfilePictureInfos";
import ProfileNav from "../../components/Profile/ProfileNav";
import Tags from "../../components/MainPage/Tags";
import UserDetails from "../../components/Profile/UserDetails";
import Header from "../../components/MainPage/Header";
import BottomNav from "../../components/BottomNav";
import MoreInfo from "../../components/Profile/MoreInfo";
import PostUpload from "../../components/Post/PostUpload";
import axios from "axios";
import { APP_BACKEND_URL } from "@env";
import { profileSuccess } from "../../redux/actions/profile";
import Posts from "../../components/Post/Posts";
const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const profile = useSelector((state) => state.profile.data);
  const [posts, setPosts] = useState([]);
  const loadData = async () => {
    const response = await axios.get(
      `${APP_BACKEND_URL}/getProfile/${userData.username}`
    );
    dispatch(profileSuccess(response.data));
    setPosts(response.data.posts);
  };
  console.log(posts)
  useEffect(() => {
    loadData();
  }, []);
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <Header />
          <Cover user={profile} />
          <ProfilePictureInfos user={profile} />
          <View style={styles.line} />
          <View style={styles.header}>
            <ProfileNav user={profile} />
          </View>
          <UserDetails user={profile} />
          <MoreInfo />
          <PostUpload
            user={profile}
            navigation={navigation}
            page={"MyProfile"}
          />
          <View style={styles.taglist}>
            <Tags />
          </View>
          {posts?.map((post) => (
            <View key={post._id} style={styles.post}>
              <Posts post={post} />
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} page={"MyProfile"} />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#44f205",
    paddingBottom: 100
  },
  profile: {
    Width: "100%",
    height: "100%",
    marginTop: 25,
    backgroundColor: "black",
    marginBottom: 80
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#575958"
  },
  header: {
    backgroundColor: "#fff",
    height: 45
  },
  taglist: {
    marginTop: 20,
    marginBottom: -30
  },
  post: {
    marginTop: 10,
  }
});
