/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ylxdbcndamcggpnulimw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlseGRiY25kYW1jZ2dwbnVsaW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNjg3MjUsImV4cCI6MjAyMTk0NDcyNX0.M7j_RblDQO9O8BTWxrpP9KJOUnew70vvyMcr1M7DlMc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
