import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import userHome from "./pages/Login/usuarioLogin";
import donoHome from "./pages/Login/proprietarioLogin";
import menu from "./pages/Home/menu";
import donoCadastro from "./pages/Cadastros/cadastroProprietario";
import userCadastro from "./pages/Cadastros/cadastroUsuario";
import telaUsuario from "./pages/Telas/telaUsuario";

const Stack = createStackNavigator();

export default class Routes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Menu" component={menu} />
          <Stack.Screen name="LoginUsuario" component={userHome} />
          <Stack.Screen name="LoginProprietario" component={donoHome} />
          <Stack.Screen name="cadastroProprietario" component={donoCadastro} />
          <Stack.Screen name="cadastroUsuario" component={userCadastro} />
          <Stack.Screen name="telaUsuario" component={telaUsuario} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
