import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { BrowserRouter } from "react-router-dom";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["movie"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
