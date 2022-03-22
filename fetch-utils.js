const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZ3JmY3dnbHduaXN3dWlsZnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM0MDAsImV4cCI6MTk2MzEyOTQwMH0._gHMV0sj3d-0HPIgU3x1yZVFLsxu68U2NdqEm0LxnFg';
const SUPABASE_URL = 'https://iogrfcwglwniswuilfsw.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBears() {
    const data = await client
        .from ('bear')
        .select('*');
    return data.body;
}

export async function getFish() {
    const data = await client
        .from ('fish')
        .select('*');
    return data.body;
}

export async function getgoblin() {
    const data = await client
        .from ('goblins')
        .select('*');
    return data.body;
}
