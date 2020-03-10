import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Main from "./containers/Main";
import mainReducer from "./redux/reducers";

const store = createStore(mainReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
