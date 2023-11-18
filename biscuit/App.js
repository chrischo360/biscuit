// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { NativeRouter } from "react-router-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "./src/Register/Register";
// import { Login } from "./src/Login/Login";
// import { Main } from "./src/Main/Main";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      //{" "}
      <Stack.Navigator>
        {/* <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <NativeRouter>
    //   <View style={styles.container}>
    //     <Link to="/login">
    //       <Text>Login</Text>
    //     </Link>
    //     <StatusBar style="auto" />
    //   </View>
    //   <Route path="/login" component={Login} />
    // </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
