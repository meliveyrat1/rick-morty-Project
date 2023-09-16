import { ADD_FAV, REMOVE_FAV } from "./actions_types";

export function addFavorite(character) {
    return { type: ADD_FAV, payload: character };
  }
  export function removeFavorite(id) {
    return {
      type: REMOVE_FAV,
      payload: id,
    };
  } 