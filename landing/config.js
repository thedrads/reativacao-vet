// CONFIG.JS - Reativação Vet

// URL do Google Apps Script (ATUALIZADA com a sua URL real)
window.CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfycbwPqTleo79ED4iTUOvcQKl76VsziAumUfIqqJ0PgwOcZl1DamgdMhk5Jh7teRRydFPDvQ/exec',
  
  // WhatsApp CTAs
  WHATSAPP_AGENDAR: 'https://api.whatsapp.com/send?phone=5521988630296&text=Ol%C3%A1!+gostaria+de+agendar+uma+consulta+com+microchip+gr%C3%A1tis',
  WHATSAPP_OUTRO: 'https://api.whatsapp.com/send?phone=5521988630296&text=Ol%C3%A1%2C+gostaria+de+explicar+o+motivo+da+minha+aus%C3%AAncia+no+consult%C3%B3rio'
};

// Mapeamento dos códigos para textos legíveis
window.OPT_MAP = {
  '1_P1_MOTIVO_FINANCEIRO':         '💸 Financeiro no momento',
  '2_P1_MUDOU_ENDERECO':            '📦 Mudei de endereço',
  '3_P1_NAO_TEM_PET':               '🚶‍♂️ Não tenho mais o pet',
  '4_P1_EXPERIENCIA_RUIM':          '😕 Experiência abaixo do esperado',
  '5_P1_LUTO':                      '🖤 Luto',
  '6_P1_FUI_ATENDIDO_RECENTEMENTE': '✅ Fui atendido(a) recentemente',
  '7_P1_SAUDE_PESSOAL_FAMILIAR':    '💊 Saúde pessoal ou familiar',
  '8_P1_PLANO_SAUDE_PET':           '🩺 Plano de Saúde PET',
  '9_P2_CONSULTORIO':               '🏥 No consultório',
  '10_P2_DOMICILIO':                '🏡 Domiciliar',
  'CTA_AGENDAR':                    '📅 Agendar agora'
};
