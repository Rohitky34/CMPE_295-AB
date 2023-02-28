import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";

function LoginScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const submit = () => navigation.navigate("signup");
  const forgot = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpeg")}
        resizeMode="cover"
        style={styles.container}
      >
        <Image
          style={styles.logo}
          source={require("../assets/logo_transparent.png")}
        ></Image>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          The easiest and quickest way to share rides and earn Karma.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={Text}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={Text}
          placeholder="Password"
        />
        <Pressable>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </Pressable>
        <View style={styles.container2}>
          <Button
            onPress={submit}
            style={styles.button}
            title="Submit"
            accessibilityLabel="Signin to your account"
          />
          <Pressable>
            <Text onPress={forgot} style={styles.desc}>
              Not a member yet? Signup here!
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "left",
    paddingLeft: 20,
  },
  subtitle: {
    fontFamily: "Georgia",
    fontWeight: "normal",
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    height: 250,
    widht: 250,
    alignSelf: "center",
  },
  input: {
    width: "90%",
    height: 55,
    backgroundColor: "#fff",
    margin: 10,
    padding: 20,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  container2: {
    paddingTop: "10%",
  },
  button: {
    color: "#007AFF",
  },
  desc: {
    fontFamily: "Georgia",
    alignSelf: "center",
    fontSize: 16,
    padding: 20,
    color: "#7b8393",
  },
  forgot: {
    textAlign: "right",
    paddingRight: 20,
    color: "#7b8393",
  },
});

export default LoginScreen;
