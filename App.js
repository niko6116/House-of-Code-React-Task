import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RoomSelectionScreen from "./src/screens/RoomSelectionScreen";
import ChatScreen from "./src/screens/ChatScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    RoomSelection: RoomSelectionScreen,
    Chat: ChatScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
