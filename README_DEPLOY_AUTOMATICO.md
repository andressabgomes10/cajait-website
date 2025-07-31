# 🚀 **GUIA DE USO - Deploy Automatizado Cajá**

## 📦 **Download e Extração**

1. **Baixe o arquivo:** `cajait_deploy_automatico.tar.gz`
2. **Extraia:** `tar -xzf cajait_deploy_automatico.tar.gz`
3. **Entre na pasta:** `cd cajait_deploy_automatico/`

---

## 🎯 **Método 1: Script All-in-One (RECOMENDADO)**

### **Execução Simples:**
```bash
./cajait_manager.sh
```

### **Menu Interativo:**
```
   ╔═══════════════════════════════════════╗
   ║          🚀 CAJÁ DEPLOY 2025          ║
   ║     Deploy Automático Completo        ║
   ╚═══════════════════════════════════════╝

1. ⚙️  Configurar SSH (primeira vez)
2. 🚀 Deploy completo do site
3. 🗄️  Configurar banco de dados
4. 🔄 Atualização rápida
5. 🧪 Testar site e conexões
6. 📊 Ver status do sistema
7. 🔧 Utilitários
```

### **Sequência Recomendada:**
1. **Opção 1** - Configurar SSH (primeira vez)
2. **Opção 2** - Deploy completo do site
3. **Opção 3** - Configurar banco de dados
4. **Opção 5** - Testar tudo

---

## ⚡ **Método 2: Scripts Individuais**

### **1. Primeira Configuração:**
```bash
./setup_ssh.sh          # Configura SSH
./deploy_cajait.sh       # Deploy completo
./setup_database.sh      # Configura banco
```

### **2. Atualizações Futuras:**
```bash
./update_cajait.sh       # Atualização rápida
./update_cajait.sh contact.php  # Arquivo específico
```

---

## 🔑 **Configuração Inicial da SSH**

### **IMPORTANTE:** Você precisa da chave SSH privada

1. **Sua chave pública (já configurada):**
   ```
   ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCsGJR8A6VCbmZEWOIco5iIls80Ta4LmEvxWyCMq6x10Tka5Suu1eTDfagUar9FwRspwlEtAnbhIiyDVHSREzcEndPdncDFTWwy/CFKaZpLyTEYuzA008nS/FTM33pCPXu8fOtHdC5QBL/I2x8ODS7mnBs222liFp4WEDMZAt4L5vM9JMGXxrT9SJMyL/2wAmj9+0jiL5cg5Ktcvop0JtFiRfG097JL8k7QiuYZRuqNFltGOINNsyLtyavARE+Lh7IeObCY2hLhoyap5GC5Zob1aymlEJ22gyWb74K9XZxUQEootMrNnvs+5tYXdoTbYGxUxHs6qs1CwRJGzZkoFXFhRWDqzY0TL6M6KQ3LARLNrUNw2Rv0w5XrwgwZfnJrCEA0u2ANjgppgTlFNqVjaYcLJW5F1YAf4dCxaS5/qiPUQrodwmM+6to1syu4317koUesUrTHfq/at/SqYRlNzENxlY8Vmp3YGRSAtEMxwdO6CS3U07PyT+NQF9wh8SX1slM= u921347543@br-asc-web1845.main-hosting.eu
   ```

2. **Salve sua chave privada como:**
   ```bash
   ~/.ssh/cajait_hostinger
   chmod 600 ~/.ssh/cajait_hostinger
   ```

3. **Teste a conexão:**
   ```bash
   ssh u921347543@br-asc-web1845.main-hosting.eu
   ```

---

## 📋 **Processo Completo Automatizado**

### **Passo 1: Executar Manager**
```bash
./cajait_manager.sh
```

### **Passo 2: Configurar SSH (Opção 1)**
- Configura automaticamente a chave SSH
- Cria configuração SSH
- Testa conexão

### **Passo 3: Deploy Completo (Opção 2)**
- ✅ Faz backup automático do site atual
- ✅ Envia todos os arquivos (HTML, CSS, JS, PHP)
- ✅ Cria estrutura de pastas (config/, admin/)
- ✅ Configura permissões automáticamente
- ✅ Testa se o site está funcionando

### **Passo 4: Configurar Banco (Opção 3)**
- 📝 Solicita credenciais do MySQL
- ⚙️ Cria arquivo de configuração automaticamente
- 📤 Envia configuração para servidor
- 🧪 Testa conexão com banco
- 📋 Cria script SQL no servidor

### **Passo 5: Testar Sistema (Opção 5)**
- 🌐 Testa site principal (cajait.com)
- 👨‍💼 Testa painel admin (cajait.com/admin/)
- 🔗 Testa conexão SSH
- 📊 Mostra status completo

---

## 🔧 **Funcionalidades dos Scripts**

### **Deploy Completo (`deploy_cajait.sh`):**
- Backup automático
- Upload de todos os arquivos
- Criação de estrutura de pastas
- Configuração de permissões
- Teste de funcionamento
- Log colorido e detalhado

### **Atualização Rápida (`update_cajait.sh`):**
- Atualiza apenas arquivos modificados
- Mantém permissões corretas
- Opção para arquivo específico
- Processo super rápido

### **Configuração de Banco (`setup_database.sh`):**
- Interface interativa para credenciais
- Cria configuração PHP automaticamente
- Testa conexão com banco
- Gera script SQL no servidor
- Validação completa

### **Manager All-in-One (`cajait_manager.sh`):**
- Menu interativo colorido
- Todas as funcionalidades em um lugar
- Utilitários adicionais
- Testes automatizados
- Interface amigável

---

## 🎯 **Vantagens da Automação**

### **Rapidez:**
- ⚡ Deploy completo em menos de 1 minuto
- 🔄 Atualizações em segundos
- 🗄️ Configuração de banco automática

### **Segurança:**
- 🔒 Backup automático antes de qualquer mudança
- ✅ Validação de arquivos antes do upload
- 📋 Teste de funcionamento após deploy

### **Conveniência:**
- 🎛️ Interface menu amigável
- 🎨 Output colorido e organizado
- 📊 Status em tempo real
- 🔧 Utilitários integrados

---

## 📊 **Exemplo de Uso Completo**

```bash
# 1. Primeira vez
./cajait_manager.sh
# Escolher: 1 (SSH) → 2 (Deploy) → 3 (Banco) → 5 (Testar)

# 2. Atualizações futuras
./cajait_manager.sh
# Escolher: 4 (Atualização rápida)

# 3. Arquivo específico
./update_cajait.sh contact.php
```

---

## 🎉 **Resultado Final**

✅ **Site deployado automaticamente**  
✅ **Banco de dados configurado**  
✅ **Painel administrativo funcionando**  
✅ **Testes automatizados passando**  
✅ **Backup automático criado**  
✅ **Permissões corretas aplicadas**  

**🚀 Todo o sistema da Cajá funcionando perfeitamente com apenas alguns cliques!**

---

## 💡 **Dicas Importantes**

1. **Execute sempre o setup SSH primeiro**
2. **Mantenha a chave SSH segura**
3. **Use o manager para operações completas**
4. **Use update para mudanças rápidas**
5. **Sempre teste após mudanças**

---

**🔥 Deploy profissional automatizado em menos de 5 minutos!**