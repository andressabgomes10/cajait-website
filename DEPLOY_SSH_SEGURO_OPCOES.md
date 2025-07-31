# 🔑 DEPLOY SSH SEGURO - Cajá Hostinger 2025

## ⚠️ **SEGURANÇA PRIMEIRO:**

Você forneceu a **chave SSH pública**, mas para conexão automática precisaríamos da **chave privada** (que não deve ser compartilhada por segurança).

---

## 🚀 **OPÇÃO 1: UPLOAD MANUAL SIMPLES**

### **✅ MAIS SEGURO - Recomendado:**

1. **Baixar arquivos:** `cajait_website_2025_SEU_BANCO.tar.gz`
2. **Hostinger File Manager:** Fazer upload via painel web
3. **Editar 1 linha:** Senha em `config/database.php`
4. **Testar:** Site + painel admin

**⏱️ Tempo:** 10-15 minutos  
**🔒 Segurança:** Máxima

---

## 🚀 **OPÇÃO 2: SSH MANUAL COM SUA CHAVE**

### **Se preferir SSH (você mesmo executar):**

**1. Conectar ao seu servidor:**
```bash
ssh -i /caminho/para/sua/chave-privada u921347543@srv1845.hstgr.io
```

**2. Navegar para public_html:**
```bash
cd /home/u921347543/public_html
```

**3. Fazer backup (opcional):**
```bash
mkdir backup_$(date +%Y%m%d) && cp -r * backup_$(date +%Y%m%d)/
```

**4. Upload via SCP (do seu computador):**
```bash
scp -i sua-chave-privada -r cajait_deploy_2025/* u921347543@srv1845.hstgr.io:/home/u921347543/public_html/
```

**5. Configurar permissões:**
```bash
chmod 644 *.html *.css *.js *.php
chmod 644 config/*.php admin/*.php
chmod 755 config admin
```

---

## 🔧 **OPÇÃO 3: COMANDOS HOSTINGER PANEL**

### **Via File Manager Web:**

**1. Acessar:** hPanel → File Manager
**2. Navegar:** public_html/
**3. Upload:** Todos os arquivos do pacote
**4. Extrair:** Se enviou arquivo compactado
**5. Editar:** config/database.php (inserir senha)

---

## 📋 **ESTRUTURA FINAL ESPERADA:**

```
public_html/
├── index.html          ← Site com widget "Ajuda?"
├── style.css           ← Cores douradas corretas
├── script.js           ← JavaScript funcional
├── contact.php         ← Conecta no seu banco
├── config/
│   └── database.php    ← ⚠️ EDITAR SENHA AQUI
└── admin/
    ├── index.php       ← Dashboard
    ├── login.php       ← Login seguro  
    ├── logout.php      ← Logout
    └── view_contact.php ← Detalhes
```

---

## 🔑 **ÚNICA CONFIGURAÇÃO NECESSÁRIA:**

**Arquivo:** `config/database.php` (linha 10)
```php
private $password = 'SUA_SENHA_MYSQL_REAL_AQUI';
```

**⚠️ Alterar:** `SUA_SENHA_MYSQL_REAL_AQUI` pela senha real do MySQL

---

## 🧪 **CHECKLIST FINAL:**

- [ ] **Arquivos no servidor:** ✅ public_html/
- [ ] **Senha configurada:** ✅ config/database.php  
- [ ] **Site carrega:** ✅ Design dourado aparece
- [ ] **Widget funciona:** ✅ Botão "Ajuda?" no canto
- [ ] **Formulário salva:** ✅ Mensagem verde sucesso
- [ ] **Admin funciona:** ✅ Login admin/cajait2025!

---

## 💡 **RECOMENDAÇÃO:**

**Use OPÇÃO 1 (File Manager)** - É mais segura e simples!

Sua chave SSH fica protegida e você tem controle total do processo.

---

**🔥 Resultado:** Site profissional com widget Cajá + cores corretas + sistema completo!