import { createClient } from "@supabase/supabase-js";


const PROJECT_URL = "https://izrnsenyrmcrxkzqcwvd.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cm5zZW55cm1jcnhrenFjd3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NzQ0MjcsImV4cCI6MTk4NDA1MDQyN30.N6OneJqz7em3JJxcUFTFikEuNwyvCD9WdrxD74b3hMI";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService(){
    return {
        getAllVideos(){
            return supabase.from("video")
                        .select("*");
        }
    }
}