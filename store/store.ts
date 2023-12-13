import {configureStore} from "@reduxjs/toolkit";
import useReducer from "../slices/userSlice";


export function makeStore(){
    return configureStore({
        reducer: {
            book:useReducer
        }
    })
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch