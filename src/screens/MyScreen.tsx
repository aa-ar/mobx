import { observer } from "mobx-react";
import React, { useContext } from "react";
import { NavigationFunctionComponent } from "react-native-navigation";

import { storeContext } from "../../stores";

interface IMyScreenProps {}

const MyScreen: NavigationFunctionComponent<IMyScreenProps> = observer(() => {
  const { MyStore } = useContext(storeContext);
  return null;
});

export default {
  name: "com.appname.MyScreen",
  screen: MyScreen
}