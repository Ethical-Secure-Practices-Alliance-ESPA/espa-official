import { createClient } from '@supabase/supabase-js';

// Directly hardcode the variables for client-side use
// OR make sure you replace these at build time with environment variables
const supabaseUrl = "https://kqbotgvulzfklpztmkus.supabase.co";
const supabaseAnonKey = "sb_publishable_723TloFOHyj6nvLFZ2bZyw_fBaM4TB7";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
