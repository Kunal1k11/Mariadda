import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./src/screens/MainPage/MainPage";
import Login from "./src/screens/LoginSignup/Login/Login";
import ForgotPassword from "./src/screens/LoginSignup/ForgotPassword/ForgotPassword";
import Signup from "./src/screens/LoginSignup/Signup/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="Login" component={Login} />
    </NavigationContainer>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            animation: "slide_from_bottom",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default function App() {
  return (
    <RootNavigation />
  );
}

const styles = StyleSheet.create({});
