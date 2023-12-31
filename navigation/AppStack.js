import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import ViewADish from "../screen/ViewADish";
import Landing from "../screen/Landing";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewADish"
        component={ViewADish}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
