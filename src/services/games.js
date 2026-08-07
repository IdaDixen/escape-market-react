import { supabase } from './supabaseClient.js'

export async function getGames() {
      const { data, error } = await supabase
        .from("games")
        .select("*")
      
      if (error) {
        console.error(error)
        return [];
      }

      data;
    }