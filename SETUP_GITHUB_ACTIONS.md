# 🤖 SETUP GITHUB ACTIONS - DEPLOY AUTOMÁTICO

## 🎯 **REPOSITÓRIO CRIADO COM SUCESSO!**

Criei um repositório completo com **deploy automático** via GitHub Actions.

---

## 📁 **ESTRUTURA DO REPOSITÓRIO:**

```
cajait-website-repo/
├── .github/workflows/deploy.yml    ← GitHub Actions (deploy automático)
├── index.html                      ← Site com widget Cajá
├── style.css                       ← Cores douradas + responsivo
├── script.js                       ← Funcionalidades JavaScript
├── contact.php                     ← Formulário + banco
├── config/database.php             ← Conexão MySQL (senha configurada)
├── admin/                          ← Painel administrativo completo
├── README.md                       ← Documentação
└── [outros arquivos...]
```

---

## 🚀 **CONFIGURAÇÃO EM 5 PASSOS:**

### **1️⃣ CRIAR REPOSITÓRIO NO GITHUB**
- Acessar: [GitHub.com](https://github.com) 
- **New Repository** → Nome: `cajait-website`
- **Public** ou **Private** (sua escolha)
- **Create Repository**

### **2️⃣ UPLOAD DOS ARQUIVOS**
```bash
# Baixar pasta cajait-website-repo/
# No terminal/cmd:
cd cajait-website-repo
git init
git add .
git commit -m "🥭 Initial Cajá website with auto-deploy"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cajait-website.git
git push -u origin main
```

### **3️⃣ CONFIGURAR SSH SECRET** ⚠️ **CRÍTICO**
- **GitHub Repository** → **Settings** → **Secrets and variables** → **Actions**
- **New repository secret**:
  - **Name**: `HOSTINGER_SSH_KEY`
  - **Value**: Sua chave SSH privada completa (a que você forneceu)

### **4️⃣ ATIVAR GITHUB ACTIONS**
- **Actions** tab no repositório
- **Enable GitHub Actions** (se necessário)
- O workflow será executado automaticamente

### **5️⃣ TESTAR DEPLOY**
- **Push qualquer alteração** para branch `main`
- **Actions** tab → Ver progresso do deploy
- **Deploy manual**: Actions → Deploy Cajá Website → Run workflow

---

## 🔑 **CHAVE SSH PRIVADA (PARA O SECRET):**

```
-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----
```

---

## 🎯 **COMO FUNCIONARÁ:**

### **🔄 Deploy Automático:**
- **Push para main** → Deploy automático
- **Manual trigger** → Actions tab → Run workflow
- **Backup automático** dos arquivos existentes
- **Logs detalhados** de cada etapa

### **✅ O que será enviado:**
- 🥭 Site com widget "Ajuda?" + ícone Cajá
- 🟡 Cores douradas 100% da marca
- 📱 Sistema completo funcionando
- 🔑 Banco MySQL já configurado
- 👨‍💼 Painel admin operacional

---

## 🧪 **APÓS PRIMEIRO DEPLOY:**

1. **Actions** tab → Verificar sucesso ✅
2. **Testar site**: https://seu-dominio.com
3. **Widget funcionando**: Botão "Ajuda?" aparece
4. **Admin panel**: https://seu-dominio.com/admin/

---

## 🔥 **VANTAGENS:**

- **✨ Zero configuração** após setup inicial
- **🔄 Deploy automático** em cada alteração
- **🗄️ Backup automático** antes de cada deploy
- **📊 Logs detalhados** de cada operação
- **🚀 Rollback fácil** via git revert

---

**🎯 ESTÁ TUDO PRONTO! É SÓ CONFIGURAR O REPOSITÓRIO!** 🚀