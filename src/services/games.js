// import { supabase } from './supabaseClient.js'

export async function getGames() {
  // --- old supabase integration ---
  // const { data, error } = await supabase
  //   .from("games")
  //   .select("*");

  /* if (error) {
    console.error(error);
    return [];
  } */

  const response = await fetch("http://localhost:3000/games");
  const data = await response.json();

  return data;
}
