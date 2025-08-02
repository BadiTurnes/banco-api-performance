# banco-api-performance
banco-api-performance mentoria 2.0

# Testes de Performance com JavaScript e K6

Repositório para execução de testes de performance utilizando a ferramenta [K6](https://k6.io/) com scripts escritos em JavaScript.

Repositório disponível em: [banco-api-performance](https://github.com/BadiTurnes/banco-api-performance)

## 📌 Introdução

Este projeto tem como objetivo avaliar a performance de APIs através de testes automatizados utilizando a ferramenta K6. É possível acompanhar os testes em tempo real e exportar relatórios para análise posterior.

## 🚀 Tecnologias Utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [K6](https://k6.io/)
- Variáveis de ambiente (para configuração dinâmica)

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── config/                  # Arquivo de configuração de variáveis de ambiente
├── fixtures/                # Dados de entrada para os testes
├── helpers/                 # Funções utilitárias reutilizáveis para a integração com a API
├── tests/                   # Casos de teste organizados por módulo da API
├── utils/                   # Funções utilitárias e configurações globais
└── README.md                # Documentação do projeto
```

## 🧾 Objetivo de Cada Grupo de Arquivos

- `config/`: Arquivo de configuração de variáveis de ambiente.
- `fixtures/`: Armazena arquivos JSON com dados de entrada utilizados pelos testes.
- `helpers/`: Funções utilitárias reutilizáveis para a integração com a API.
- `tests/`: Casos de teste organizados por módulo da API.
- `utils/`: Reúne funções auxiliares, configurações e constantes reutilizadas nos testes.

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/BadiTurnes/banco-api-performance.git
   cd banco-api-performance
   ```

2. Instale o K6 (caso ainda não tenha instalado):
   - Via Homebrew (macOS):
     ```bash
     brew install k6
     ```
   - Via Linux:
     ```bash
     sudo apt install k6
     ```
   - Via VSCode no Windows:
     ```bash
     Grafana k6 install
     ```
3. Configuração da Variavel
  No arquivo `config.local.json` alterar a URL base da API a ser testada
     ```json
     {
        "baseUrl": "http://localhost:3000"
      }
     ```

## ▶️ Execução dos Testes

Antes de executar os testes, defina a variável de ambiente `BASE_URL` com a URL base da API que será testada, caso não queira usar o arquivo `config.local.json`.

### Execução Básica

```bash Sem Variavel
k6 run tests/login.test.js
k6 run tests/transferencia.test.js
```

```bash Com variavel
k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
k6 run tests/transferencia.test.js -e BASE_URL=http://localhost:3000
```

### Execução com Relatório em Tempo Real

```bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

### Exportação do Relatório

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

```bash no Windows usando CMD
- Opção1 (Em tempo real)
set K6_WEB_DASHBOARD=true&& k6 run \tests\login.test.js

- Opção2: 
set K6_WEB_DASHBOARD=true&& set K6_WEB_DASHBOARD_EXPORT=html-report.html&& k6 run \tests\login.test.js -e BASE_URL=http://localhost:3000
```

O relatório será exportado para um arquivo `html-report.html`.

---

Desenvolvido para fins de estudo e avaliação de performance de APIs RESTful.
