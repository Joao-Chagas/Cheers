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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const proprietarioLogin = () => {
  const navigation = useNavigation();

  function handleNavigationToCadastroBar() {
    navigation.navigate("cadastroProprietario");
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={require("../../image/Logo.png")} style={styles.image} />

        <View style={{ paddingBottom: 5 }}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#fff"
            placeholder="Usuário"
          />
          <TextInput
            style={styles.inputs}
            secureTextEntry={true}
            placeholderTextColor="#fff"
            placeholder="Senha"
          />
        </View>

        <View style={styles.viewButton}>
          <RectButton style={styles.button}>
            <Text style={{ color: "#fff", fontSize: 16 }}>ENTRAR</Text>
          </RectButton>

          <Text style={styles.senha}>Recuperar senha</Text>
          <Text style={styles.recuperarSenha}>Não possui uma conta?</Text>
          <Text
            style={styles.criarConta}
            onPress={handleNavigationToCadastroBar}
          >
            Crie sua conta
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1e1e",
    alignItems: "center",
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

  inputs: {
    backgroundColor: "rgba(246, 170, 28, 1)",
    width: 310,
    borderRadius: 5,
    color: "white",
    padding: 7,
    marginBottom: 16,
  },

  inputGroup: {
    paddingBottom: 8,
  },

  viewButton: {
    flex: 1,
    width: 310,
  },
  button: {
    backgroundColor: "#0575a3",
    opacity: 0.9,
    color: "#fff",
    textAlign: "center",
    padding: 12,
    borderRadius: 2,
    alignItems: "center",
  },

  senha: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  recuperarSenha: {
    color: "#fff",
    textAlign: "left",
    marginTop: 20,
    marginLeft: 30,
  },
  criarConta: {
    textDecorationLine: "underline",
    color: "#fff",
    textAlign: "right",
    marginTop: -20,
    marginRight: 40,
  },
});

export default proprietarioLogin;
