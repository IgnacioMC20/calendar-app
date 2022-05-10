import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    ui: uiReducer,
    // TODO: Add authReducer
    // TODO: Add calendarReducer
})