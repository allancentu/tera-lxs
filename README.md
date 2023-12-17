Bem-vindo ao repositório do meu projeto de conclusão do curso de Fullstack Development da Tera (turma DFSBC-2023-4). Construí uma API que servirá como back-end para uma plataforma de ensino, cobrindo as entidades aluno, curso, módulo, aula e matrícula. Abaixo [apresentarei a stack utilizada](#stack-e-estrutura-do-projeto), [o modelo de dados do sistema](#modelo-de-dados), [os endpoints que podem ser testados](#endpoints-disponíveis) e [os próximos passos do projeto](#próximos-passos).

## Stack e estrutura do projeto

O projeto foi construído em [NextJS 14](https://nextjs.org/blog/next-14), já utilizando o novo [App Router](https://nextjs.org/docs/app) e os [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers). Como ORM, foi utilizado o [Prisma](https://www.prisma.io/) e o deploy foi feito na [Vercel](https://vercel.com/) utilizando [serverless functions](https://vercel.com/docs/functions/serverless-functions) e o [Postgres gerenciado da plataforma](https://vercel.com/storage/postgres).

O projeto está organizado em duas pastas principais. Na pasta `prisma`, é possível checar o modelo de dados implementado, enquanto na pasta `src` está o código da aplicação. Dentro de `src`, a pasta `lib` armazena funções que interagem com o banco de dados e a pasta `app` armazena a implementação da API em si.

## Modelo de dados

(TBD)

## Endpoints disponíveis

Para interagir com a API, recomendo utilizar [essa coleção do Postman](#). Abaixo estão detalhados cada endpoint disponível e os métodos correspondentes. O projeto está disponível em produção [aqui](https://tera-lxs.vercel.app/).

- `/student/` e `/student/{id}`: permitem interagir com a entidade de alunos. O endpoint principal permite o método `POST` para criar novos alunos e o método `GET` para listar todos os alunos. O metódo `GET` é paginado (dez em dez itens) e a página desejada deve ser passada como parâmetro na chamada (exemplo: `/student?page=1`). O endpoint com `{id}` permite o método `PATCH` para editar um aluno específico, o método `GET` para ver informações detalhadas de um aluno específico e o método `DELETE` para remover um aluno específico do banco de dados.

- `/course/` e `/course/{id}`: permitem interagir com a entidade de cursos. O endpoint principal permite o método `POST` para criar novos cursos e o método `GET` para listar todos os cursos. O metódo `GET` é paginado (dez em dez itens) e a página desejada deve ser passada como parâmetro na chamada (exemplo: `/course?page=1`). O endpoint com `{id}` permite o método `PATCH` para editar um curso específico, o método `GET` para ver informações detalhadas de um curso específico e o método `DELETE` para remover um curso específico do banco de dados.

- `/module/` e `/module/{id}`: permitem interagir com a entidade de módulos (ligada a cursos). O endpoint principal permite o método `POST` para criar novos módulos em um curso e o método `GET` para listar todos os módulos da plataforma ou apenas os módulos de um curso específico. O metódo `GET` é paginado (dez em dez itens) e a página desejada deve ser passada como parâmetro na chamada (exemplo: `/module?page=1`). Caso queira ver todos os módulos de um curso específico, seu id também deve ser passado como parâmetro na chamada `GET` ((exemplo: `/module?course={id}`)). O endpoint com `{id}` permite o método `PATCH` para editar um módulo específico, o método `GET` para ver informações detalhadas de um módulo específico e o método `DELETE` para remover um módulo específico do banco de dados.

- `/class/` e `/class/{id}`: permitem interagir com a entidade de aulas (ligada a cursos e módulos). O endpoint principal permite o método `POST` para criar novas aulas em um módulo e o método `GET` para listar todas as asulas da plataforma ou apenas as aulas de um curso ou módulo específicos. O metódo `GET` é paginado (dez em dez itens) e a página desejada deve ser passada como parâmetro na chamada (exemplo: `/class?page=1`). Caso queira ver todas as aulas de um curso ou módulo específico, seu id também deve ser passado como parâmetro na chamada `GET` ((exemplos: `/class?course={id}` ou `/class?module={id}`)). O endpoint com `{id}` permite o método `PATCH` para editar uma aula específica, o método `GET` para ver informações detalhadas de uma aula específica e o método `DELETE` para remover uma aula específica do banco de dados.

- `/enrollment/` e `/enrollment/{id}`: permitem interagir com a entidade de matrículas (relacionamento M:N entre alunos e cursos). O endpoint principal permite o método `POST` para criar novas matrículas e o método `GET` para listar todas as matrículas da plataforma ou apenas as matrículas de um curso ou aluno específicos. O metódo `GET` é paginado (dez em dez itens) e a página desejada deve ser passada como parâmetro na chamada (exemplo: `/enrollment?page=1`). Caso queira ver todas as matrículas de um curso ou aluno específico, seu id também deve ser passado como parâmetro na chamada `GET` ((exemplos: `/enrollment?course={id}` ou `/enrollment?student={id}`)). O endpoint com `{id}` permite o método `PATCH` para editar uma matrícula específica, o método `GET` para ver informações detalhadas de uma matrícula específica e o método `DELETE` para remover uma matrícula específica do banco de dados.

## Próximos passos

- Front-end: adicionar UI para interação dos usuários com a API;
- AuthN e AuthZ: utilizar biblioteca que permita apenas chamadas autenticadas e autorizadas na API.
