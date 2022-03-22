const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZ3JmY3dnbHduaXN3dWlsZnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM0MDAsImV4cCI6MTk2MzEyOTQwMH0._gHMV0sj3d-0HPIgU3x1yZVFLsxu68U2NdqEm0LxnFg';


const SUPABASE_URL = "https://iogrfcwglwniswuilfsw.supabase.co"

const client = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export async function getBears() {
    const data = await client
        .from ('Bears')
        .select('*');
    return data.body;
}

