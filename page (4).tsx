import {notFound} from 'next/navigation';
import Landing from '../landing';
import {serverClient} from '../../lib/supabase';
export const dynamic='force-dynamic';
export default async function SellerPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)||['admin','api'].includes(slug))notFound();try{const {data}=await serverClient().from('vendedores').select('id').eq('slug',slug).eq('ativo',true).maybeSingle();if(!data)notFound()}catch{notFound()}return <Landing slug={slug}/>}
