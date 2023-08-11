import { Slot } from "expo-router";
import store from "../store";
import { Provider } from "react-redux";

export default function () {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
