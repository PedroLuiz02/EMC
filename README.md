# 🧾 EMC — Emissor de Certificados

Sistema acadêmico de emissão de certificados desenvolvido com HTML, CSS, JavaScript e Local Storage.  
O projeto permite o **cadastro de usuários, alunos, cursos e a geração de certificados personalizados**, vinculando alunos aos cursos com controle local no navegador.

---

## 💡 Sobre o Projeto

Este projeto simula a emissão de certificados educacionais. Ele armazena dados como alunos, cursos, usuários e certificados diretamente no navegador usando **Local Storage**, dispensando back-end ou banco de dados externo.

---

## ⚙️ Funcionalidades

- Cadastro de **usuários** (CRUD)
- Cadastro de **alunos** e **cursos**
- Vínculo entre alunos e cursos
- Geração de **certificados únicos** com código de validação
- Proteção de rotas com verificação de login
- Interface responsiva com Bootstrap

---

## 🧠 Como Funciona

- Os dados são salvos no `localStorage` do navegador.
- A emissão do certificado exige:
  - Selecionar um aluno cadastrado
  - Selecionar um curso cadastrado
- O certificado é salvo localmente, permitindo futuras consultas.

---

## ▶️ Como Usar

1. Clone ou baixe o projeto.
2. Abra o arquivo `index.html` no navegador.
3. Cadastre um usuário e faça login.
4. Cadastre alunos e cursos.
5. Vá até a aba de certificados e gere um para um aluno e curso selecionados.
6. Visualize e gerencie os certificados criados.

---

## 🧰 Tecnologias Utilizadas

- **HTML5**
- **CSS3 / Bootstrap**
- **JavaScript (Vanilla)**
- **Local Storage**

---

## 🛡️ Observações

- Usuário Padrão: admin@emc.com | senha:123456
- O projeto não utiliza banco de dados externo nem autenticação real.
- Os dados são armazenados localmente e serão apagados ao limpar o cache do navegador.
- Este sistema é uma simulação didática e não deve ser usado em produção.

---

## 📃 Licença

Este projeto foi desenvolvido apenas para fins educacionais.
