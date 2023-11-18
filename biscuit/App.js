import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from "react-router-native";

const Login = () => <Login></Login>

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Link to="/login">
          <Text>Login</Text>
        </Link>
        <StatusBar style="auto" />
      </View>
      <Route path="/login" component={Login} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
