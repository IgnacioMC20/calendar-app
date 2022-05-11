import { types } from "../types/types";

export const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event
})

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event
})

export const eventUnsetActive = () => ({ type: types.eventUnsetActive })

export const eventUpdate = (event) => ({ 
    type: types.eventUpdated,
    payload: event
})

export const eventDelete = () => ({ type: types.eventDeleted })