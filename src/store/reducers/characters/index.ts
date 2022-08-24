import type { PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../../models/characters";
import { InitialStoreSlice } from "../../../models/characters/store";
import { ActionFav } from "../../../models/characters/reducers";

export const reducers = {
  addCharacters: (state:InitialStoreSlice,action:PayloadAction<Character[]>) => {
    state.personajes = action.payload
  },
  addOne:(state:InitialStoreSlice,action:PayloadAction<Character>)=>{
    state.personajes.push(action.payload);
  },
  toggleFavorite:(state:InitialStoreSlice,action:PayloadAction<ActionFav>) =>{
    if(action.payload.isFav){
     
      if(state.favoritos.includes(action.payload.personaje)){
        return state;
      }
     
      const favs = [...state.favoritos];
      favs.push(action.payload.personaje);

      return {...state,favoritos:favs};
    }

    if(!action.payload.isFav){
      if(!state.favoritos.includes(action.payload.personaje)){
        return state;
      }

      const favs = state.favoritos.filter(fav => fav !== action.payload.personaje);
      return {...state,favoritos:favs};
    }
    return state;
  }
};
