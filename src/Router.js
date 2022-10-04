import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./page/Home";
import Question from "./page/Question";
import Result from "./page/Result";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"HomePage"} component={Home} />
        <Stack.Screen name={"QuestionPage"} component={Question} />
        <Stack.Screen name={"ResultPage"} component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;