import React, { Component } from "react";
import { AppLoading } from "expo";
import { Header } from "react-native-elements";
import { Left, Right, Icon } from "native-base";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Yellowtail_400Regular, useFonts } from "@expo-google-fonts/yellowtail";

const arrayImage = [
  {
    nome: "imagem1",
    sourceBG: require("../../image/Slide/Stories1.png"),
    source: require("../../image/Slide/IconeStories1.png"),
  },
  {
    nome: "imagem2",
    sourceBG: require("../../image/Slide/Stories2.png"),
    source: require("../../image/Slide/IconeStories2.png"),
  },
  {
    nome: "imagem3",
    sourceBG: require("../../image/Slide/Stories3.png"),
    source: require("../../image/Slide/IconeStories3.png"),
  },
  {
    nome: "imagem4",
    sourceBG: require("../../image/Slide/Stories4.png"),
    source: require("../../image/Slide/IconeStories4.png"),
  },
];

const telaUsuario = () => {
  const [fontsLoaded] = useFonts({
    Yellowtail_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.main}>
          {/* <View style={styles.logo}> */}
          <Header
            style={styles.logo}
            leftComponent={
              <Image
                style={styles.image}
                source={require("../../image/Logo.png")}
              />
            }
            centerComponent={<Text style={styles.logoText}>Cheers!</Text>}
            rightComponent={{
              icon: "menu",
              size: 32,
              color: "rgba(246, 170, 28, 1)",
            }}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
              height: 80,
            }}
            backgroundColor={"#1f1e1e"}
            rightContainerStyle={{ marginBottom: 15 }}
            leftContainerStyle={{ marginLeft: 5 }}
          />
          {/* </View> */}

          <View style={styles.itemsContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {arrayImage.map((item) => (
                <TouchableOpacity
                  key={String(item.nome)}
                  style={[styles.item]}
                  activeOpacity={0.6}
                  onPress={() => {
                    console.log(item.source);
                  }}
                >
                  <ImageBackground source={item.sourceBG} style={[styles.item]}>
                    <Image
                      source={item.source}
                      style={{
                        width: 30,
                        height: 30,
                        marginLeft: 2,
                        marginTop: 3,
                      }}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={styles.viewButton}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 13 }}>Estou Aqui</Text>
                <TouchableOpacity
                  style={{ borderRadius: 20 }}
                  onPress={() => {
                    console.log("apertado");
                  }}
                >
                  <ImageBackground
                    source={require("../../image/Estou-aqui/Estou-AquiBG.png")}
                    style={styles.button}
                  >
                    <Image
                      source={require("../../image/Estou-aqui/Estou-Aqui.png")}
                      style={{ width: 80, height: 80, marginTop: -5 }}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 13 }}>Promoções</Text>
                <TouchableOpacity
                  style={{ borderRadius: 20 }}
                  onPress={() => {
                    console.log("apertado");
                  }}
                >
                  <ImageBackground
                    source={require("../../image/Promocoes/PromocaoBG.png")}
                    style={styles.button}
                  >
                    <Image
                      source={require("../../image/Promocoes/Promocoes.png")}
                      style={{ width: 80, height: 80 }}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.viewButton2}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 13 }}>Suas Mesas</Text>
                <TouchableOpacity
                  style={{ borderRadius: 20 }}
                  onPress={() => {
                    console.log("apertado");
                  }}
                >
                  <ImageBackground
                    source={require("../../image/Mesa/MesasBG.png")}
                    style={styles.button}
                  >
                    <Image
                      source={require("../../image/Mesa/Mesas.png")}
                      style={{ width: 80, height: 80 }}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 13 }}>
                  Troca de Pontos
                </Text>
                <TouchableOpacity
                  style={{ borderRadius: 20 }}
                  onPress={() => {
                    console.log("apertado");
                  }}
                >
                  <ImageBackground
                    source={require("../../image/Troca-de-Pontos/Troca-de-PontosBG.png")}
                    style={styles.button}
                  >
                    <Image
                      source={require("../../image/Troca-de-Pontos/Troca-de-Pontos.png")}
                      style={{ width: 80, height: 80, marginTop: -5 }}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ color: "#fff", fontSize: 13, marginBottom: 5 }}>
              QRCode
            </Text>
            <TouchableOpacity
              style={{ borderRadius: 20 }}
              onPress={() => {
                console.log("apertado");
              }}
            >
              <ImageBackground
                source={require("../../image/QRCode/QRCodeBG.png")}
                style={styles.button}
              >
                <Image
                  source={require("../../image/QRCode/QRCode.png")}
                  style={{ width: 80, height: 80 }}
                />
              </ImageBackground>
            </TouchableOpacity>
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
    marginTop: 30,
  },

  logo: {
    flexDirection: "row",
    marginRight: 200,
    marginTop: -55,
    height: 60,
  },

  image: {
    width: 50,
    height: 50,
    paddingBottom: 24,
    marginBottom: 20,
    marginLeft: 10,
  },

  logoText: {
    position: "relative",
    paddingHorizontal: 12,
    color: "rgba(246, 170, 28, 1)",
    opacity: 0.9,
    fontSize: 36,
    fontFamily: "Yellowtail_400Regular",
    marginBottom: 21,
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
    marginTop: 10,
    flexDirection: "row",
  },
  viewButton2: {
    marginTop: 20,
    flexDirection: "row",
  },
  row1: {},

  button: {
    backgroundColor: "#000000",
    textAlign: "center",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 30,
    height: 95,
    width: 125,
  },

  itemsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 5,
  },

  item: {
    backgroundColor: "#1f1e1e",
    height: 150,
    width: 100,
    borderRadius: 16,
    marginRight: 8,
  },
});

export default telaUsuario;
