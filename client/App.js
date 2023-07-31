import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/LoginSignup/Login/Login";
import Signup from "./src/screens/LoginSignup/Signup/Signup";
import MainPage from "./src/screens/MainPage/MainPage";
import Chats from "./src/screens/ChatSection/Chats";
import { store } from "./src/redux/store"; // Import the store object
import Requests from "./src/screens/Requests/Requests";
import Notifications from "./src/screens/Notifications/Notifications";
import NavProfileMenu from "./src/screens/Menus/NavProfileMenu";
import HeaderNavMenu from "./src/screens/Menus/HeaderNavMenu";
import MyProfile from './src/screens/Profile/MyProfile'
import UploadPost from "./src/screens/Post/UploadPost";
import ForgotPassword from './src/screens/LoginSignup/ForgotPassword/ForgotPassword'
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator
         screenOptions={{
           headerShown: false,
           animation: "slide_from_right"
         }}
       >
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Signup" component={Signup} />
         <Stack.Screen name="MainPage" component={MainPage} />
         <Stack.Screen name="Chats" component={Chats} />
         <Stack.Screen name="Requests" component={Requests} />
         <Stack.Screen name="Notifications" component={Notifications} />
         <Stack.Screen name="HeaderNavMenu" component={HeaderNavMenu} />
         <Stack.Screen name="NavProfileMenu" component={NavProfileMenu} />
         <Stack.Screen name="MyProfile" component={MyProfile} />
         <Stack.Screen name="UploadPost" component={UploadPost} />
         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
       </Stack.Navigator>
     </NavigationContainer>
   );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
