import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./src/screens/MainPage/MainPage";
import Login from "./src/screens/LoginSignup/Login/Login";
import ForgotPassword from "./src/screens/LoginSignup/ForgotPassword/ForgotPassword";
import Signup from "./src/screens/LoginSignup/Signup/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Login" component={Login} />
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
  );
}

const styles = StyleSheet.create({});
