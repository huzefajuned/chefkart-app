import { CartContextProvider } from "./context";
import AppStack from "./navigation/AppStack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <AppStack />
      </CartContextProvider>
    </NavigationContainer>
  );
}
