# Mega Imports

Site minimalista de ofertas e atacado, com links rastreáveis por vendedor e painel em `/admin`.

## Instalação

1. Execute `npm install`.
2. Copie `.env.example` para `.env.local` e configure as 3 variáveis com valores do seu projeto Supabase.
3. Execute `npm run dev`.
4. Na Vercel, importe o repositório GitHub e configure as mesmas 3 variáveis de ambiente.
5. Aponte o domínio personalizado conforme as instruções de DNS da Vercel.

**Segurança:** `SUPABASE_SERVICE_ROLE_KEY` é segredo de servidor; NUNCA cole em arquivos versionados nem use prefixo `NEXT_PUBLIC_`. Nunca compartilhe chaves ou senhas por chat. O painel valida o usuário autenticado e sua presença na tabela `administradores` no servidor.

**Atenção antes da publicação:** implemente rate limiting e proteção contra abuso na rota `/api/track` (por exemplo, proteção no edge/WAF e limitação por IP). Os eventos são contagens aproximadas de acessos/cliques, não entradas efetivas no grupo nem vendas. O relatório tem limite de 100.000 eventos por consulta; em escala maior, implemente agregação SQL. Teste login, RLS e permissões com uma conta não administradora. O projeto requer hospedagem com termos compatíveis com atividade comercial; Hobby da Vercel não é para uso comercial.

**Marca:** o símbolo M é tipográfico provisório. Substitua por sua logomarca original quando disponível.
