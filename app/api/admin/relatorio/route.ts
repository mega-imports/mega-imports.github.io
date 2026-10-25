import { NextResponse } from 'next/server';
import { serverClient, verifyAdmin } from '../../../../lib/supabase';

export async function GET(req: Request) {
  if (!(await verifyAdmin(req))) {
    return NextResponse.json(
      { error: 'Não autorizado' },
      { status: 401 }
    );
  }

  const url = new URL(req.url);
  const days = Math.min(
    90,
    Math.max(1, Number(url.searchParams.get('days') || 30) || 30)
  );

  const since = new Date(Date.now() - days * 86400000).toISOString();

  const { data, error } = await serverClient()
    .from('eventos')
    .select('vendedor_id,tipo,criado_em')
    .gte('criado_em', since)
    .limit(100000);

  return NextResponse.json(
    error
      ? { error: error.message }
      : { data, days, truncated: (data?.length || 0) >= 100000 },
    { status: error ? 500 : 200 }
  );
}
