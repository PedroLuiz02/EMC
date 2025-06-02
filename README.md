# 🧾 EMC — Emissor de Certificados

Sistema acadêmico de emissão de certificados desenvolvido com HTML, CSS, JavaScript (Vanilla) e Local Storage. 
O projeto permite o **cadastro de usuários, alunos, cursos e a geração de certificados personalizados**, vinculando alunos aos cursos.

---

## 💡 Sobre o Projeto

Este projeto simula a emissão de certificados educacionais. Ele armazena dados como alunos, cursos, usuários e certificados diretamente no navegador usando **Local Storage**, dispensando back-end ou banco de dados externo.

Ele inclui funcionalidades completas de CRUD para usuários, alunos e cursos, além de proteção de rotas com verificação simples de login, garantindo que apenas usuários autenticados possam acessar certas páginas.

---

## ⚙️ Funcionalidades

- Cadastro de **usuários** (CRUD)
- Cadastro de **alunos** e **cursos**
- Proteção de rotas via verificação de token no Local Storage
- Emissão de certificados personalizados vinculando alunos e cursos
- Validação básica dos formulários com feedback visual
- Interface responsiva e estilizada com Bootstrap

---

## 🧠 Como Funciona

- Todos os dados são salvos no Local Storage do navegador, tornando o sistema totalmente offline.
- O sistema verifica se existe um token de login armazenado para proteger as rotas internas, redirecionando para a página de login caso o usuário não esteja autenticado.
- A edição e exclusão de registros atualizam o Local Storage e a interface em tempo real.
- O logout remove os dados do usuário e token do Local Storage e redireciona para o login.

---

## ▶️ Como Usar

1. Clone ou baixe o projeto.
2. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server.
3. Faça o cadastro de usuários para criar contas.
4. Realize o login com as credenciais cadastradas.
5. Cadastre alunos e cursos através da interface.
6. Gere certificados personalizados vinculando alunos e cursos.
7. Faça logout quando desejar encerrar a sessão.

---

## 🧰 Tecnologias Utilizadas

- **HTML5**
- **CSS3 / Bootstrap**
- **JavaScript (Vanilla)**
- **Local Storage**

---

## 🛡️ Observações

- O projeto não utiliza banco de dados externo nem autenticação real.
- Os dados são armazenados localmente no navegador e serão perdidos ao limpar o cache ou usar outro navegador/máquina.
- Este sistema é uma simulação didática e não deve ser usado em produção.
- Não possui backend real.
- A segurança é básica, focada em aprendizado e prototipagem.

---

## 📃 Licença

Este projeto foi desenvolvido apenas para fins educacionais.



