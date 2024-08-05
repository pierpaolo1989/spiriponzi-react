import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wimrgquytvaoonthrqla.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbXJncXV5dHZhb29udGhycWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4Mzc0NzQsImV4cCI6MjAzODQxMzQ3NH0.tagnGpTlbtQIPfFNCmWysQascbnp_RBwd5mMjaiC2ek"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)