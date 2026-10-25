'use client';
import {useEffect} from 'react';
const GROUP='https://chat.whatsapp.com/Kma4haV64ZdJEpxClcgzvI?s=cl&p=i&mlu=4&ilr=4&iam=2';
const WHOLESALE='https://wa.me/5598984389727?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20comprar%20no%20atacado%20da%20Mega%20Imports.';
export default function Landing({slug}:{slug?:string}){
useEffect(()=>{if(slug)void fetch('/api/track',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({slug,tipo:'acesso'})})},[slug]);
function go(tipo:'grupo_whatsapp'|'atacado_whatsapp',url:string){if(slug){const payload=JSON.stringify({slug,tipo});void fetch('/api/track',{method:'POST',headers:{'content-type':'application/json'},body:payload,keepalive:true})}window.open(url,'_blank','noopener,noreferrer')}
return <main className="shell"><section className="panel"><div className="monogram">M</div><h1 className="brand">MEGA</h1><div className="subbrand">IMPORTS</div><div className="line"/><p className="muted">Tecnologia, importados e ofertas exclusivas.<br/>Atacado e varejo para todo o Brasil.</p><button className="btn" onClick={()=>go('grupo_whatsapp',GROUP)}>Entrar no Grupo de Ofertas</button><button className="btn secondary" onClick={()=>go('atacado_whatsapp',WHOLESALE)}>Comprar no Atacado</button><p className="small">MEGA IMPORTS • Loja online</p></section></main>
}
