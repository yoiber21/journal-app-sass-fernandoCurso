import React from "react";

// Se importa el provider para utilizar el store
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import store from "./store/store";

export const JournalApp = () => {

  return(
    <Provider store={store}>
        <AppRouter />
    </Provider>
  )
};
