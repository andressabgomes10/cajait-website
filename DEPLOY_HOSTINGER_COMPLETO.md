# 🚀 Sistema Completo Cajá - Deploy no Hostinger

## 📦 **Novo Sistema com Banco de Dados**

Agora o site da Cajá possui um sistema completo com:
- ✅ **Formulário de contato** que salva no banco de dados
- ✅ **Painel administrativo** para gerenciar mensagens
- ✅ **Sistema de login** seguro
- ✅ **Estatísticas** e relatórios
- ✅ **Busca e filtros** avançados

---

## 📁 **Arquivos do Sistema**

### **Arquivos Principais (Upload na Raiz):**
- `index.html` - Site principal
- `style.css` - Estilos do site
- `script.js` - JavaScript do site
- `contact.php` - Formulário com banco de dados

### **Pasta de Configuração:**
- `config/database.php` - Configuração do banco

### **Painel Administrativo (Pasta admin/):**
- `admin/index.php` - Lista de contatos
- `admin/login.php` - Tela de login
- `admin/logout.php` - Logout
- `admin/view_contact.php` - Detalhes do contato

### **Scripts de Instalação:**
- `database_setup.sql` - Criação das tabelas
- `generate_password.php` - Gerador de senhas (opcional)

---

## 🗄️ **1. CONFIGURAR BANCO DE DADOS**

### **Passo 1: Criar Banco no Hostinger**
1. Acesse **hPanel** > **Bancos de Dados** > **MySQL**
2. Clique em **"Criar uma Nova Base de Dados MySQL"**
3. **Nome sugerido:** `u921347543_cajait_db` (ou qualquer nome)
4. **Usuário sugerido:** `u921347543_cajait` (ou qualquer usuário)
5. **Senha:** Crie uma senha forte
6. **Anotar:** Nome do banco, usuário e senha

### **Passo 2: Executar Script SQL**
1. Acesse **phpMyAdmin** no painel do Hostinger
2. Selecione o banco de dados criado
3. Vá na aba **"SQL"**
4. **Copie e cole TODO o conteúdo** do arquivo `database_setup.sql`
5. Clique em **"Executar"**
6. ✅ **Sucesso:** Deve criar 5 tabelas

### **Passo 3: Configurar Conexão**
1. **Edite o arquivo** `config/database.php`
2. **Altere as linhas:**
   ```php
   private $db_name = 'SEU_NOME_DO_BANCO_AQUI';    // Ex: u921347543_cajait_db
   private $username = 'SEU_USUARIO_MYSQL_AQUI';   // Ex: u921347543_cajait
   private $password = 'SUA_SENHA_MYSQL_AQUI';     // Sua senha forte
   ```

---

## 🌐 **2. FAZER UPLOAD DOS ARQUIVOS**

### **Estrutura Final no Hostinger:**
```
public_html/
├── index.html
├── style.css
├── script.js
├── contact.php
├── config/
│   └── database.php
└── admin/
    ├── index.php
    ├── login.php
    ├── logout.php
    └── view_contact.php
```

### **Upload via Gerenciador de Arquivos:**
1. **Arquivos na raiz:** `index.html`, `style.css`, `script.js`, `contact.php`
2. **Criar pasta:** `config` e fazer upload de `database.php`
3. **Criar pasta:** `admin` e fazer upload dos 4 arquivos PHP do admin

### **Definir Permissões:**
- `contact.php` → **644**
- `config/database.php` → **644**
- Todos os arquivos PHP do admin → **644**

---

## 🔑 **3. TESTAR O SISTEMA**

### **Teste 1: Site Principal**
1. Acesse `https://cajait.com`
2. Vá até o formulário de contato
3. Preencha e envie uma mensagem
4. ✅ **Deve aparecer:** Mensagem verde de sucesso

### **Teste 2: Painel Administrativo**
1. Acesse `https://cajait.com/admin/`
2. **Login:**
   - **Usuário:** `admin`
   - **Senha:** `cajait2025!`
3. ✅ **Deve aparecer:** Painel com estatísticas e mensagens

### **Teste 3: Visualizar Mensagem**
1. No painel, clique em **"Ver"** em uma mensagem
2. ✅ **Deve aparecer:** Detalhes completos do contato

---

## 📊 **4. FUNCIONALIDADES DO SISTEMA**

### **Para Visitantes do Site:**
- ✅ Formulário de contato funcionando
- ✅ Mensagens amigáveis de sucesso/erro
- ✅ Design responsivo para mobile

### **Para Administradores (Painel):**
- ✅ **Dashboard:** Estatísticas gerais
- ✅ **Lista de contatos:** Paginada e filtrada
- ✅ **Busca:** Por nome, email, empresa, mensagem
- ✅ **Filtros:** Status (novo/lido/respondido) e serviços
- ✅ **Ações:** Marcar como lido, respondido, excluir
- ✅ **Detalhes:** Visualização completa do contato
- ✅ **Email direto:** Link para responder via email

### **Sistema de Status:**
- 🟡 **Novo** - Mensagem recém-chegada
- 🔵 **Lido** - Mensagem visualizada
- 🟢 **Respondido** - Cliente já foi contatado

---

## 🔧 **5. CONFIGURAÇÕES AVANÇADAS**

### **Alterar Credenciais de Admin:**
1. Acesse o **phpMyAdmin**
2. Vá na tabela `usuarios_admin`
3. **Para alterar senha:**
   ```sql
   UPDATE usuarios_admin 
   SET password = PASSWORD_HASH('nova_senha_aqui', PASSWORD_DEFAULT) 
   WHERE username = 'admin';
   ```

### **Adicionar Novo Administrador:**
```sql
INSERT INTO usuarios_admin (username, password, nome_completo, email) 
VALUES ('novo_admin', PASSWORD_HASH('senha_nova', PASSWORD_DEFAULT), 'Nome Completo', 'email@exemplo.com');
```

### **Configurar Email de Destino:**
- No arquivo `contact.php`, linha 4:
  ```php
  $recipient_email = 'andressa@cajait.com';  // Alterar se necessário
  ```

---

## 🚨 **6. SOLUÇÃO DE PROBLEMAS**

### **Erro "Database connection failed":**
1. ✅ Verificar credenciais em `config/database.php`
2. ✅ Confirmar se o banco foi criado
3. ✅ Testar conexão no phpMyAdmin

### **Erro 500 no formulário:**
1. ✅ Verificar permissões dos arquivos PHP (644)
2. ✅ Checar logs de erro no painel Hostinger
3. ✅ Confirmar se todas as tabelas foram criadas

### **Não consegue fazer login no admin:**
1. ✅ Confirmar usuário: `admin` e senha: `cajait2025!`
2. ✅ Verificar se a tabela `usuarios_admin` existe
3. ✅ Executar novamente o script SQL

### **Formulário não salva no banco:**
1. ✅ Testar conexão do banco
2. ✅ Verificar se tabela `contatos` existe
3. ✅ Checar logs do PHP no Hostinger

---

## 📈 **7. MONITORAMENTO**

### **Estatísticas Disponíveis:**
- Total de contatos recebidos
- Contatos novos, lidos e respondidos
- Mensagens recebidas hoje
- Serviços mais procurados

### **Relatórios:**
- Filtrar por período
- Buscar por cliente específico
- Acompanhar status de resposta

### **Backup Automático:**
- Todos os contatos ficam salvos no banco
- Backup regular através do painel Hostinger
- Exportação via phpMyAdmin

---

## 🎯 **RESULTADO FINAL**

✅ **Site profissional** com formulário funcionando  
✅ **Todas as mensagens salvas** no banco de dados  
✅ **Painel administrativo completo** para gerenciar contatos  
✅ **Sistema seguro** com login protegido  
✅ **Estatísticas e relatórios** para acompanhar resultados  
✅ **Design responsivo** para todos os dispositivos  

---

**🔥 O sistema está completo e pronto para uso profissional!**

**📞 Em caso de dúvidas:** Todos os arquivos estão bem documentados e o sistema é intuitivo de usar.