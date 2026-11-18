# CX Command Center

CRM interno de Customer Experience: atendimento, cobrança, cancelamentos, retenção/churn, recibos, consultorias, playbooks e relatórios em um só lugar.

> Versão de portfólio anonimizada de uma ferramenta desenvolvida para uma escola de idiomas; dados e marcas reais removidos.

## O que faz
- **Dashboard** com pendências do dia, tarefas vencidas e casos críticos.
- **Tarefas** com prioridade, prazo e histórico; **Cancelamentos** com cálculo de multa/estorno e prazo de 30 dias.
- **Cobrança** com régua 7·14·21·28·60 dias e mensagem sugerida por estágio.
- **Retenção/Churn** com score (motivo + urgência) e alerta de risco alto.
- **Consultorias**, **Playbooks** (base de conhecimento), **Voice of Customer**, **Importar** (planilha de vendas), **Relatórios** (CSV/Excel) e **Painel Admin** (usuários, Slack, logs).
- Perfis de acesso (Admin, Cobrança, Retenção, Atendimento) que adaptam menu e permissões.

## Destaques técnicos
- Frontend reativo **sem build**: Preact + htm via ESM/CDN (import map).
- Mesmo código em dois modos: **demo** (localStorage) ou **Supabase** (multiusuário, Realtime).
- **Row-Level Security** habilitado em todas as tabelas (acesso só para usuários autenticados) e perfil criado por trigger em `auth.users`.
- `service_role` só nas funções serverless; anon key no cliente protegida por RLS.
- **Vercel Cron**: digest diário no Slack, recálculo de churn e tarefas automáticas.
- Sanitização de XSS no markdown, neutralização de injeção de fórmula em CSV, CSP e headers de segurança.
- Protótipo Streamlit + SQLite com senhas PBKDF2-HMAC-SHA256 e geração de PDF (ReportLab).

## Stack
Preact · htm · Supabase (Postgres, Auth, RLS, Realtime) · Vercel Serverless + Cron · Slack Webhooks · Python · Streamlit · SQLite · ReportLab

## Como rodar
**Web, modo demo** (sem conta em nenhum serviço): defina `DEMO_PASSWORD` em `web/config.js` e sirva a pasta:
```bash
cd web && python3 -m http.server 8611   # http://localhost:8611
```
Entre com um dos e-mails de exemplo listados na tela de login e a senha definida.

**Web, modo Supabase + Vercel**
1. Crie um projeto Supabase e rode `web/supabase/schema.sql` no SQL Editor.
2. Em Authentication → Users, crie seu usuário; depois `update public.profiles set perfil='Admin' where email='seu@email';`.
3. Preencha `SUPABASE_URL` e `SUPABASE_ANON_KEY` em `web/config.js` e use `DEMO_MODE: false`.
4. Publique `web/` na Vercel com as variáveis de `.env.example`.

**Streamlit (protótipo local)**
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
CX_DEMO_PASSWORD='sua-senha' streamlit run app.py
```

## Estrutura
```
web/            versão principal (Preact + Supabase + Vercel)
  app.js        login, sidebar por perfil, roteamento
  config.js     URL/anon key do Supabase, modo demo, marca
  lib/          store (demo ⇄ Supabase + realtime), hooks, ui, markdown seguro
  modules/      um arquivo por módulo
  api/          funções serverless (Slack, crons, importação, admin)
  supabase/     schema.sql (tabelas + RLS + realtime + seed)
app.py, core/, modules/   versão Streamlit (SQLite, PBKDF2, PDF, exportação)
```

## Direitos autorais

© 2026 Gustavo Fiedler Calegari. Todos os direitos reservados.

Este código está publicado apenas para avaliação de portfólio. Não é permitido copiar, modificar, distribuir ou usar comercialmente, no todo ou em parte, sem autorização por escrito do autor.
