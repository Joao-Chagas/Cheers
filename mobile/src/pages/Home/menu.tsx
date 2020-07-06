import React from "react";
import { RectButton } from "react-native-gesture-handler";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function menu() {
  const navigation = useNavigation();

  function handleNavigationToUser() {
    navigation.navigate("LoginUsuario");
  }
  function handleNavigationToBar() {
    navigation.navigate("LoginProprietario");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.main}>
          <Image
            source={require("../../image/Logo.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.viewButton}>
          <Text style={styles.entrarComo}>ENTRAR COMO:</Text>
          <RectButton
            style={styles.buttonClient}
            onPress={handleNavigationToUser}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              CLIENTE
            </Text>
          </RectButton>
          <RectButton style={styles.buttonBar} onPress={handleNavigationToBar}>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              PROPRIETARIO DE BAR
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1e1e",
  },

  main: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 100,
  },

  image: {
    width: 150,
    height: 150,
    paddingBottom: 24,
    marginBottom: 60,
  },

  viewButton: {
    flex: 1,
    width: 310,
  },
  buttonBar: {
    backgroundColor: "#0575a3",
    opacity: 0.9,
    color: "#fff",
    textAlign: "center",
    padding: 12,
    borderRadius: 2,
    marginTop: 20,
    alignItems: "center",
  },
  buttonClient: {
    backgroundColor: "#0575a3",
    opacity: 0.9,
    color: "#fff",
    textAlign: "center",
    padding: 12,
    borderRadius: 2,
    alignItems: "center",
  },
  entrarComo: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 50,
    fontSize: 20,
  },
});

export default menu;
