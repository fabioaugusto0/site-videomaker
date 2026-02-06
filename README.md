# Fábio Augusto - Videomaker Fortaleza (Site Estático)

Este é o site oficial do **Fábio Augusto**, videomaker especialista em profissionais da saúde em Fortaleza. 

O projeto foi migrado de uma estrutura React complexa para **HTML5 + CSS3 Estático** visando performance máxima, SEO otimizado e hospedagem simplificada.

## 🚀 Estrutura do Projeto

A estrutura de arquivos para produção (GitHub Pages / Vercel) deve ser **exatamente** esta:

```
/ (Raiz)
├── index.html        # Arquivo principal (Todo o site vive aqui)
├── sitemap.xml       # Mapa do site para Google
├── robots.txt        # Instruções para indexadores
├── assets/           # Pasta de recursos
│   ├── img/          # Todas as imagens .webp
│   └── favicon.png   # Ícone do navegador
└── README.md         # Este arquivo
```

## 🛠 Como Editar

Como o site é estático, não é necessário rodar `npm install` ou `npm run dev`.

1. **Editar Conteúdo:** Abra o `index.html` em qualquer editor de código (VS Code, Notepad++, etc).
2. **Editar Estilos:** O CSS está embutido na tag `<style>` dentro do `<head>` do `index.html`.
3. **Imagens:** Adicione novas imagens na pasta `assets/img/` e atualize o caminho `src` no HTML.

## 📦 Deploy (Hospedagem)

Basta subir os arquivos listados acima para qualquer serviço de hospedagem estática:

*   **GitHub Pages:** Ative nas configurações do repositório apontando para a branch `main` (root).
*   **Vercel / Netlify:** Basta conectar o repositório; eles detectam automaticamente o `index.html`.

---
*Desenvolvido com foco em alta conversão e estética premium.*