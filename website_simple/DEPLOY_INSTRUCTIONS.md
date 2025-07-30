# Instruções de Deploy - Site Cajá

## 📁 Arquivos do Site

O site foi convertido para **HTML + PHP puro** para facilitar o deploy no Hostinger:

- `index.html` - Página principal
- `style.css` - Estilos do site
- `script.js` - JavaScript para interatividade
- `contact.php` - Script PHP para processar formulário
- `DEPLOY_INSTRUCTIONS.md` - Este arquivo

## 🚀 Como fazer o Deploy no Hostinger

### 1. Acesse o cPanel do Hostinger
- Faça login na sua conta Hostinger
- Acesse o cPanel do domínio cajait.com

### 2. Upload dos Arquivos
- Vá em **File Manager** (Gerenciador de Arquivos)
- Navegue até a pasta `public_html`
- Faça upload de todos os 4 arquivos:
  - `index.html`
  - `style.css`
  - `script.js`
  - `contact.php`

### 3. Configurar Permissões
- Clique com botão direito no arquivo `contact.php`
- Escolha **Permissions** (Permissões)
- Configure para **755** ou **644**

### 4. Teste o Site
- Acesse `cajait.com` no navegador
- Teste o formulário de contato
- Verifique se está recebendo emails em andressa@cajait.com

## ✅ Funcionalidades Implementadas

### Frontend:
- ✅ Design oficial Cajá (cores dourado/bronze)
- ✅ Tipografia: Gilda Display + Nunito Sans
- ✅ Layout responsivo (mobile e desktop)
- ✅ Navegação suave
- ✅ Animações e efeitos visuais
- ✅ Formulário de contato integrado

### Backend:
- ✅ Script PHP para processar formulário
- ✅ Envio de emails via SMTP Hostinger
- ✅ Validação de dados
- ✅ Sanitização de inputs
- ✅ Tratamento de erros
- ✅ Log de submissões

## 📧 Configuração de Email

O formulário está configurado para:
- **SMTP Host**: smtp.hostinger.com
- **Porta**: 587
- **Email**: andressa@cajait.com
- **Destinatário**: andressa@cajait.com

## 🔧 Troubleshooting

### Se o formulário não funcionar:

1. **Verifique PHP**:
   - Acesse `cajait.com/contact.php` diretamente
   - Deve mostrar erro de método não permitido (normal)

2. **Teste SMTP**:
   - Verifique se o email andressa@cajait.com existe no Hostinger
   - Confirme se a senha está correta

3. **Permissões**:
   - contact.php deve ter permissão 755 ou 644

4. **Logs**:
   - Verifique os logs do cPanel para erros PHP

### Se precisar alterar algo:

1. **Email destinatário**: Edite `$recipient_email` no contact.php
2. **Cores/design**: Edite o arquivo style.css
3. **Textos**: Edite o arquivo index.html
4. **Funcionalidades**: Edite o arquivo script.js

## 📱 Teste Mobile

Depois do deploy, teste em:
- iPhone/Android
- Tablet
- Desktop (Chrome, Firefox, Safari)

## 🎯 URLs Importantes

- **Site**: https://cajait.com
- **cPanel**: https://hpanel.hostinger.com
- **Email**: https://webmail.hostinger.com

## 📞 Suporte

Se houver problemas:
1. Verifique os logs do Hostinger
2. Teste cada arquivo individualmente
3. Verifique configurações DNS do domínio
4. Entre em contato com suporte Hostinger se necessário

---

**✨ O site está pronto para produção e otimizado para o Hostinger!**