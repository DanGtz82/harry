import type { PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../../models/characters";
import { InitialStoreSlice } from "../../../models/characters/store";

export const reducers = {
  addCharacters: (state:InitialStoreSlice,action:PayloadAction<Character[]>) => {
    state.personajes = action.payload
  }
};
