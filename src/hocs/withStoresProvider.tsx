import React, { useContext, useEffect } from "react";
import { NavigationFunctionComponent } from "react-native-navigation";
import { NavigationContext } from "react-native-navigation-hooks";

import { rootStore, StoreProvider } from "../stores";
import { CodePushProvider } from "../contexts";

export const withStoresProvider = <P extends {}>(WrappedComponent: NavigationFunctionComponent<P>): NavigationFunctionComponent<P> => {
  const CompositeComponent: NavigationFunctionComponent<P> = (props) => {
    const screens = [];
    const { componentId } = useContext(NavigationContext);

    useEffect(() => {
      if (!screens.includes(componentId)) {
        screens.push(componentId);
      }
    }, [componentId]);

    return (
    <StoreProvider value={rootStore}>
      <CodePushProvider>
        <WrappedComponent {...props} />
      </CodePushProvider>
    </StoreProvider>
  );};

  return CompositeComponent;
};
