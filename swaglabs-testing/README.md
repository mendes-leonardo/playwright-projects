# Swag Labs Testing with Playwright

Testes end-to-end (E2E) para o site [SauceDemo](https://www.saucedemo.com/) (Swag Labs) utilizando [Playwright](https://playwright.dev/).

## Tecnologias

- [Playwright](https://playwright.dev/) v1.60 — framework de testes E2E
- JavaScript (CommonJS)
- Allure Report (via `allure-playwright`) — instalado, pendente de configuração
- HTML Reporter — ativo por padrão

## Pré-requisitos

- Node.js 18+
- npm

## Instalação e Execução

```bash
# Instalar dependências
npm install

# Instalar navegadores (Chromium, Firefox)
npx playwright install chromium firefox

# Executar todos os testes (modo headless)
npx playwright test

# Executar com interface gráfica
npx playwright test --headed

# Executar em um navegador específico
npx playwright test --project=chromium
npx playwright test --project=firefox

# Executar um arquivo de teste específico
npx playwright test tests/login.spec.js
```

## Estrutura do Projeto

```
swaglabs-testing/
├── playwright.config.js       # Configuração do Playwright
├── package.json
├── tests/
│   └── login.spec.js          # Testes de login
├── tests-data/
│   └── users.json             # Massa de dados dos usuários
├── playwright-report/         # Relatórios HTML gerados
├── test-results/              # Artefatos (screenshots, vídeos, traces)
└── .gitignore
```

## Cenários de Teste

| Cenário | Descrição | Resultado Esperado |
|---|---|---|
| Login com dados válidos | Insere usuário `standard_user` e senha `secret_sauce` | Redireciona para `/inventory/` e exibe "Swag Labs" |
| Login com senha inválida | Insere usuário `standard_user` e senha incorreta | Exibe mensagem de erro: "do not match any user" |

## Dados de Teste

Os dados estão centralizados em `tests-data/users.json`:

```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  },
  "invalidUserPassword": {
    "password": "wrong_pass"
  }
}
```

> As credenciais utilizadas são públicas e fornecidas pela própria Sauce Labs para fins de demonstração.