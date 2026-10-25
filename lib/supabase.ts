import { createClient } from '@supabase/supabase-js';
export function publicClient(){return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)}
export function serverClient(){return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.SUPABASE_SERVICE_ROLE_KEY!,{auth:{persistSession:false,autoRefreshToken:false}})}
export async function verifyAdmin(request:Request){const token=request.headers.get('authorization')?.replace(/^Bearer /i,'');if(!token)return false;const {data:{user},error}=await publicClient().auth.getUser(token);if(error||!user)return false;const {data}=await serverClient().from('administradores').select('user_id').eq('user_id',user.id).maybeSingle();return !!data}
