import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uzqxwqlmqyfsjjayeptc.supabase.co";
const supabaseKey = "sb_publishable_j3_5xVK9QJfBzeQhTB70Og_kBS91v_f";

export const supabase = createClient(supabaseUrl, supabaseKey);