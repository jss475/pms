// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from "redux-devtools-extension";
import ownerReducer from "./features/login_signup/ownerSlice";


// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({
    reducer: {
        owner: ownerReducer,
    }
})

export default store;