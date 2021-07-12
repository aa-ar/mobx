import { Navigation, NavigationFunctionComponent } from "react-native-navigation";

import { withStoresProvider } from "../HOCs";

// Calendar
import MyScreen from "./MyScreen";

export const registerScreens = () => {
  registerScreen(MyScreen.screen, MyScreen.name);
};


const registerScreen = (component: NavigationFunctionComponent, name: string) =>
  Navigation.registerComponent(
    name,
    () => withStoresProvider(component),
    () => component
  );
