# Projeto de Automação com Playwright

Este projeto foi desenvolvido para demonstrar o uso do **Playwright** em automação de testes. Os testes estão organizados em arquivos separados, cada um verificando cenários específicos como navegação e validação de conteúdos em diferentes sites.

---

## 📂 Estrutura do Projeto

```
.
├── .github/               # Configurações de integração com GitHub (opcional)
├── .idea/                 # Configurações do editor/IDE
├── helpers/               # Funções auxiliares e utilitárias para os testes
├── node_modules/          # Dependências instaladas via npm
├── playwright-report/     # Relatórios gerados pelo Playwright após os testes
├── test-results/          # Resultados detalhados dos testes
├── tests/                 # Diretório principal dos testes automatizados
│   ├── abrir-apple-store.spec.js
│   ├── abrir-google-play-store.spec.js
│   ├── abrir-wikipedia-commons.spec.js
│   ├── pesquisar-wiki.spec.js
│   ├── pesquisar-wiki-mobile.spec.js
│   └── verificar-conteudo.spec.js
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── package.json           # Configurações e dependências do projeto
├── package-lock.json      # Versões exatas das dependências instaladas
├── playwright.config.js   # Configuração global do Playwright
```

---

## 🧪 Casos de Teste

### Testes Implementados

- **abrir-apple-store.spec.js**: Valida a navegação até a página da Apple Store.
- **abrir-google-play-store.spec.js**: Verifica o acesso à Google Play Store.
- **abrir-wikipedia-commons.spec.js**: Testa a navegação para o Wikimedia Commons.
- **pesquisar-wiki.spec.js**: Realiza uma busca na Wikipedia e valida o conteúdo exibido.
- **pesquisar-wiki-mobile.spec.js**: Simula a busca na Wikipedia em um dispositivo móvel.
- **verificar-conteudo.spec.js**: Verifica o conteúdo carregado em uma página específica.

---

## 📋 Requisitos

Certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Playwright](https://playwright.dev/)

---

## 🚀 Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Instale os navegadores necessários:
   ```bash
   npx playwright install
   ```

---

## 🎯 Executando os Testes

1. Execute todos os testes:
   ```bash
   npx playwright test
   ```

2. Execute um teste específico:
   ```bash
   npx playwright test tests/<nome_do_teste>.spec.js
   ```

3. Execute no modo visual (não headless):
   ```bash
   npx playwright test --headed
   ```

4. Gere um relatório após a execução dos testes:
   ```bash
   npx playwright show-report
   ```

---

## ✨ Funcionalidades Extras

- **Relatórios Detalhados**: Os relatórios são salvos na pasta `playwright-report/` após cada execução.
- **Resultados dos Testes**: Detalhes adicionais podem ser encontrados em `test-results/`.

---

## 🛠️ Ferramentas Utilizadas

- **Playwright**: Framework para automação de testes.
- **Node.js**: Ambiente para execução de JavaScript.
- **Visual Studio Code**: IDE recomendada.

---

## ✍️ Autores

- Emilly Pessutti; 
- Rafel Vier Alberton;
- Vitor Paladini.
