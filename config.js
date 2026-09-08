// ============================================================================
// config.js - Configuracao PUBLICA do Supabase (frontend)
//
// Os valores __SUPABASE_URL__ e __SUPABASE_ANON_KEY__ sao substituidos
// automaticamente pelo GitHub Actions no momento do deploy, usando os
// Secrets do repositorio (Settings > Secrets and variables > Actions).
//
// Regra de ouro: esta chave e a anon/publishable (PUBLICA). A seguranca
// dos dados e feita pela RLS no Supabase. JAMAIS coloque aqui a chave
// service_role - ela da acesso total e ignora a RLS.
// ============================================================================
window.SUPABASE_URL = '__SUPABASE_URL__';
window.SUPABASE_ANON_KEY = '__SUPABASE_ANON_KEY__';
