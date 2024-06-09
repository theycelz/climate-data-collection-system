

# Sistema de Coleta de Dados Climáticos

Este projeto Node.js com PostgreSQL tem como objetivo fornecer uma maneira simples de inserir e consultar dados de temperatura e umidade em um banco de dados para uma determinada cidade e país.

## Como funciona

O projeto consiste em duas partes principais:

1. **Coletor de Dados:** Um script Node.js que permite ao usuário inserir manualmente os dados de temperatura e umidade no terminal, associados a uma cidade e país específicos. Esses dados são então armazenados no banco de dados PostgreSQL.

2. **Consulta de Dados:** Um script Node.js que permite ao usuário consultar os dados de temperatura e umidade armazenados no banco de dados para uma cidade e país específicos.

##Organização

climate-data-collection
├── src
│   ├── application
│   │   └── services
│   │       └── climaService.js
│   ├── domain
│   │   ├── entities
│   │   │   └── clima.js
│   │   └── repositories
│   │       └── climaRepository.js
│   ├── infrastructure
│   │   ├── db
│   │   │   └── dbConfig.js
│   │   └── cli
│   │       └── coletaClima.js

Application: Contém os serviços da aplicação, responsáveis pela lógica de aplicação.
Domain: Contém as entidades e repositórios que representam a lógica de domínio e regras de negócio.
Infrastructure: Contém a configuração de banco de dados e scripts de interface (CLI).

## Tecnologias Utilizadas

- Node.js: Para a lógica de backend e execução de scripts.
- PostgreSQL: Como banco de dados para armazenar os dados de temperatura e umidade.
- JavaScript: Linguagem principal para o desenvolvimento.
- SQL: Para consultas e manipulação de dados no PostgreSQL.

## Configuração

1. Certifique-se de ter o Node.js e o PostgreSQL instalados em sua máquina.

2. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git


3. Instale as dependências:

   ```bash
   npm install 
   ```

4. Configure as variáveis de ambiente no arquivo `dbconfig`:

   ```plaintext
   DB_HOST=seu-host
   DB_USER=seu-usuario
   DB_PASSWORD=sua-senha
   DB_NAME=nome-do-banco-de-dados
   ```

5. Execute o script `create_table.sql` para criar a tabela no banco de dados.

6. Você está pronto para começar a inserir e consultar os dados de temperatura e umidade!

## Uso

### Inserção de Dados

Para inserir dados de temperatura e umidade, execute o seguinte comando no terminal:

```bash
node coletaClima.js "cidade, país" 
```

Substitua `"cidade, país"` pelos valores correspondentes.

### Consulta de Dados

Função em desenvolvimento 

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas.

Lembre-se de substituir `"seu-usuario/nome-do-repositorio"` com o seu nome de usuário e nome do repositório.
