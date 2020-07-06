import React, { useState, ChangeEvent } from "react";
import { AppLoading } from "expo";
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
  Modal,
} from "react-native";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

import { Yellowtail_400Regular, useFonts } from "@expo-google-fonts/yellowtail";

const cadastroProprietario = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  const [fontsLoaded] = useFonts({
    Yellowtail_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function IsEmpty() {
    if (name == null) {
      <Modal animationType="fade" transparent={true}>
        Teste
      </Modal>;
    }
  }

  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate("LoginProprietario");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.main}>
          <View style={styles.logo}>
            <Image
              source={require("../../image/Logo.png")}
              style={styles.image}
            />
            <Text style={styles.logoText}>Cheers!</Text>
          </View>
          <View style={{ paddingBottom: 5 }}>
            <TextInput
              value={login}
              onChangeText={(text) => {
                setLogin(text);
                console.log(login);
              }}
              style={styles.inputs}
              placeholderTextColor="#fff"
              placeholder="Usuário"
            />
            <TextInput
              style={styles.inputs}
              secureTextEntry={true}
              placeholderTextColor="#fff"
              placeholder="Senha"
              value={senha}
              onChangeText={(text) => {
                setSenha(text);
                console.log(senha);
              }}
            />
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#fff"
              style={styles.inputs}
              value={nome}
              onChangeText={(text) => {
                setNome(text);
                console.log(nome);
              }}
            />
            <TextInput
              placeholder="CPF"
              placeholderTextColor="#fff"
              style={styles.inputs}
              value={cpf}
              onChangeText={(text) => {
                setCpf(text);
                console.log(cpf);
              }}
            />
            <TextInput
              placeholder="Telefone"
              placeholderTextColor="#fff"
              style={styles.inputs}
              value={telefone}
              onChangeText={(text) => {
                setTelefone(text);
                console.log(telefone);
              }}
            />
          </View>
          <View style={styles.viewButton}>
            <RectButton style={styles.button} onPress={handleLogin}>
              <Text style={{ color: "#fff", fontSize: 16 }}>CADASTRAR</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
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

  logo: {
    flexDirection: "row",
  },

  image: {
    width: 50,
    height: 50,
    paddingBottom: 24,
    marginBottom: 60,
  },

  logoText: {
    position: "relative",
    paddingHorizontal: 12,
    color: "rgba(246, 170, 28, 1)",
    opacity: 0.9,
    fontSize: 36,
    fontFamily: "Yellowtail_400Regular",
  },

  inputs: {
    backgroundColor: "rgba(246, 170, 28, 1)",
    width: 310,
    borderRadius: 5,
    color: "white",
    padding: 7,
    marginBottom: 20,
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
    marginBottom: 30,
  },

  senha: {
    color: "#fff",
    textAlign: "center",
    marginTop: 22,
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

export default cadastroProprietario;
