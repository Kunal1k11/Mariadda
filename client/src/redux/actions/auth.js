import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginAction = (userData) => async (dispatch) => {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(userData));
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  } catch (error) {
    console.log("Error saving user data to AsyncStorage:", error);
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem("userData");
    dispatch({
      type: "LOGOUT",
    });
  } catch (error) {
    console.log("Error clearing user data from AsyncStorage:", error);
  }
};
