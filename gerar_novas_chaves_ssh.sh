#!/bin/bash

# 🔑 Gerador de Novas Chaves SSH para Hostinger
echo "🔑 GERANDO NOVO PAR DE CHAVES SSH"
echo "================================="

# Gerar novo par de chaves
ssh-keygen -t rsa -b 4096 -f /tmp/cajait_hostinger_nova -N "" -C "cajait@hostinger.com"

echo ""
echo "✅ NOVO PAR DE CHAVES GERADO!"
echo "=============================="
echo ""

echo "🔓 CHAVE PÚBLICA (para adicionar no Hostinger):"
echo "-----------------------------------------------"
cat /tmp/cajait_hostinger_nova.pub
echo ""

echo "🔐 CHAVE PRIVADA (manter segura):"
echo "--------------------------------"
echo "Arquivo: /tmp/cajait_hostinger_nova"
echo ""

echo "📋 PRÓXIMOS PASSOS:"
echo "1. Copiar a CHAVE PÚBLICA acima"
echo "2. Adicionar no Hostinger: hPanel → SSH Access → Add Key"
echo "3. Usar a CHAVE PRIVADA para conectar"
echo ""

echo "🚀 COMANDO PARA CONECTAR:"
echo "ssh -i /tmp/cajait_hostinger_nova u921347543@srv1845.hstgr.io"