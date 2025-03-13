/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jdehmxdpnkhmbcmmlbzw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZWhteGRwbmtobWJjbW1sYnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NjE5MDgsImV4cCI6MjA1NzQzNzkwOH0.YHPyJDL9es2NWxdswzY2OkARJSgRNP5t5moR8aaKd8U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
