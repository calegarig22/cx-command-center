/* Configuração pública do CX Command Center.
   Copie os valores do seu projeto Supabase (Project Settings → API).
   Com RLS ativo, a ANON KEY pode ficar no cliente; a service_role NUNCA.
   Sem SUPABASE_URL (ou com DEMO_MODE: true) o app roda em modo demo, com dados
   fictícios no localStorage do navegador. */
window.CX_CONFIG = {
  SUPABASE_URL: "",          // ex.: "https://SEU-PROJETO.supabase.co"
  SUPABASE_ANON_KEY: "",     // chave "anon public" do seu projeto
  DEMO_MODE: true,
  // Senha dos usuários de exemplo no modo demo. Defina a sua antes de rodar.
  DEMO_PASSWORD: "",
  // URL do gerador de recibos (projeto separado), aberto pelo módulo Recibos.
  RECIBOS_URL: "",
  // Multa por cancelamento após o prazo de arrependimento (% sobre o serviço não utilizado).
  // Valor de exemplo: ajuste conforme o seu contrato.
  MULTA_PERCENTUAL: 10,
  BRAND: { nome: "CX Command Center", sub: "Escola de Idiomas Exemplo" },
};
