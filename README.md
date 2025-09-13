# Site Starter — HTML + CSS + JS

Projeto base **100% estático** com:
- ✅ Estrutura organizada e comentada
- ✅ Formulário de contato usando **Formspree**
- ✅ Consumo de API pública **ViaCEP**
- ✅ Boas práticas de segurança (CSP, headers) e acessibilidade
- ✅ Sem expor dados sensíveis

1. ## Consulta CEP 🌐

Este projeto é um site modelo construído em HTML, CSS e JavaScript puro, seguindo boas práticas de organização, acessibilidade e segurança.
Ele foi pensado como uma base sólida para quem esta apredendo iniciar novos projetos web sem expor dados sensíveis e com deploy facilitado (Netlify).

✨ Funcionalidades

Layout Cyberpunk: interface estilizada com paleta neon (magenta e ciano), efeitos de brilho e ambientação futurista.

Formulário de Contato (Formspree): envio de mensagens sem backend próprio, usando Formspree.

Integração com API Pública (ViaCEP): busca de endereço a partir do CEP digitado, com feedback direto na tela.

Código Modular: JavaScript organizado em módulos (main.js, api/viacep.js, utils/dom.js).

Acessibilidade: uso de landmarks semânticos (header, main, footer), aria-live para mensagens dinâmicas e skip link.



2. **Rodar localmente**
   Como usamos ES Modules, abra um servidor local. Opções:
   - **Node.js**: `npx http-server . -p 5173` (instale com `npm i -g http-server` se preferir)
   - **Python**: `python -m http.server 5173`
   - **VS Code**: extensão **Live Server**

   Depois, acesse `http://localhost:5173` no navegador.

3. **Deploy**
   - **Netlify**: crie um site a partir do seu repositório Git ou use _drag & drop_. Public folder: a raiz do projeto.

4. **Segurança**
   - Mantemos headers em `netlify.toml` com **Content-Security-Policy**.
   - Se adicionar novas origens (APIs, imagens externas), inclua-as em `connect-src`/`img-src`.

5. ## Estrutura de Pastas

```
.
├── assets
│   ├── css
│   │   └── styles.css
│   ├── img
│   │   └── logo.svg
│   └── js
│       ├── api
│       │   └── viacep.js
│       ├── utils
│       │   └── dom.js
│       └── main.js
├── index.html
├── netlify.toml
├── vercel.json
└── README.md
```

---

**Dica:** este projeto não usa chaves ou variáveis sensíveis. Caso futuramente integre APIs que exijam segredos, **NÃO** os coloque no JavaScript do cliente. Use funções serverless do Netlify ou um backend separado.
