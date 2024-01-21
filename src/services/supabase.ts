import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qvkpwepmkcdppmhrebzv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2a3B3ZXBta2NkcHBtaHJlYnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4Njk5NjEsImV4cCI6MjAyMTQ0NTk2MX0.2papL798kh4lZfIXJ0-tS0TiZgPVc7jXeqponWFRR1U";
export const supabase = createClient(supabaseUrl, supabaseKey);
