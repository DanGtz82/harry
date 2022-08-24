import { createSlice } from '@reduxjs/toolkit';
import { InitialStoreSlice } from '../../models/characters/store';
import { reducers } from '../reducers/characters';
import personajes from '../../db/hp-characters.json';

const initialState: InitialStoreSlice = {
  personajes,
  favoritos: []
};

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers
});

export default characterSlice.reducer;
