# 🚀 Guia Completo para Deploy no Hostinger - Site Cajá

## 📁 Arquivos Necessários
Os seguintes arquivos devem ser enviados para o Hostinger:
- `index.html` - Página principal do site
- `style.css` - Estilos e responsividade 
- `script.js` - Interatividade e formulário
- `contact.php` - Processamento do formulário de contato

## 🌐 Passo a Passo para Upload

### 1. **Acesse o Painel do Hostinger**
- Entre em sua conta no Hostinger
- Vá para **hPanel** > **Gerenciador de Arquivos**

### 2. **Navegue para a Pasta Correta**
- Acesse a pasta `public_html` (ou pasta do seu domínio)
- **IMPORTANTE**: Remova arquivos existentes se houver (index.html antigo, etc.)

### 3. **Upload dos Arquivos**
- **Método 1 - Via Interface Web:**
  - Clique em "Upload" no Gerenciador de Arquivos
  - Selecione todos os 4 arquivos: `index.html`, `style.css`, `script.js`, `contact.php`
  - Aguarde o upload completar

- **Método 2 - Via FTP:**
  - Use as credenciais FTP do Hostinger
  - Envie os arquivos para a pasta raiz do domínio

### 4. **Configurar Permissões do PHP**
- Clique com botão direito em `contact.php`
- Selecione "Permissões" ou "Chmod"
- Defina como **644** ou **755**

### 5. **Testar o Funcionamento**
- Acesse seu domínio (ex: `https://cajait.com`)
- Navegue até a seção "Contato"
- Preencha e envie o formulário de teste
- **Deve aparecer mensagem de SUCESSO verde**

## ✅ **Mensagens do Formulário Após Deploy**

### Mensagem de Sucesso:
*"🎉 Perfeito! Sua mensagem foi enviada com sucesso! Nossa equipe da Cajá recebeu sua solicitação e entrará em contato em até 24 horas. Muito obrigado pelo interesse!"*

### Mensagem de Erro (caso haja problemas):
*"💌 Ops! Algo deu errado com o envio automático, mas não se preocupe! Sua mensagem foi registrada e nossa equipe entrará em contato. Como alternativa, você pode nos escrever diretamente: andressa@cajait.com"*

## 🔧 **Configurações Técnicas do Hostinger**

### Email Configuration
- O formulário usa `mail()` do PHP
- No Hostinger, isso funciona automaticamente
- Emails serão enviados para: `andressa@cajait.com`
- Remetente: `noreply@cajait.com`

### PHP Requirements
- PHP 7.4+ (Hostinger suporta)
- Função `mail()` habilitada (padrão no Hostinger)
- Nenhuma extensão especial necessária

## 🚨 **Solução de Problemas**

### Se o formulário não enviar:
1. **Verifique permissões** do arquivo `contact.php`
2. **Confira logs** no painel do Hostinger (Error Logs)
3. **Teste email** - certifique-se que `andressa@cajait.com` existe

### Se o design não aparecer:
1. **Verifique se todos os arquivos** foram enviados
2. **Confirme nomes** dos arquivos (case-sensitive)
3. **Limpe cache** do navegador (Ctrl+F5)

### Se aparecer erro 500:
1. **Verifique sintaxe** do PHP
2. **Consulte Error Logs** no Hostinger
3. **Teste em subdiretório** primeiro

## 📱 **Funcionalidades Incluídas**
- ✅ **Responsividade completa** (mobile, tablet, desktop)
- ✅ **Formulário de contato funcional** com validação
- ✅ **Mensagens amigáveis** de sucesso/erro
- ✅ **Animações suaves** de loading e feedback
- ✅ **Design profissional** seguindo identidade Cajá
- ✅ **SEO otimizado** com meta tags adequadas

## 📞 **Pós-Deploy**
Após o upload, teste:
1. **Navegação** entre seções
2. **Responsividade** em diferentes dispositivos  
3. **Formulário de contato** com dados reais
4. **Velocidade** de carregamento
5. **Links sociais** (LinkedIn, Instagram)

## 🎯 **Resultado Final**
Site profissional da Cajá funcionando perfeitamente no Hostinger com formulário de contato inteligente e design responsivo!

---

**💡 Dica**: Mantenha backup dos arquivos originais e teste sempre em ambiente de staging primeiro.