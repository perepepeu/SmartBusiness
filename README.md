# **SmartBusiness**

**SmartBusiness** é um organizador financeiro para pequenos e médios negócios, desenvolvido para ajudar empresários a gerenciar suas finanças de forma prática e eficiente.

---

## 🔧 Funcionalidades

- Cadastro de usuários com autenticação via Firebase.  
- Criação e gerenciamento de lojas.  
- Cadastro de produtos com:
  - Preço de custo e preço de venda
  - Categoria personalizada
  - Código de barras e código interno (SKU)
- Busca rápida de produtos por nome, código de barras ou SKU.  
- Interface simples, intuitiva e responsiva.

---

## 📁 Estrutura do Projeto

Organizacao_de_Negocios/
│
├── index.html # Página inicial
│
├── static/ # Arquivos estáticos
│ ├── styles.css # Estilos globais
│ ├── scripts.js # Scripts do site
│ ├── firebase-config.js # Configuração do Firebase
│ └── assets/ # Imagens e outros recursos
│
├── template/ # Páginas HTML
│ ├── main.html # Painel principal do usuário
│
│ ├── login/ # Autenticação
│ │ ├── login.html
│ │ ├── signup.html
│ │ └── reset-password.html
│
│ ├── products/ # Produtos
│ │ ├── add-product.html
│ │ ├── list-products.html
│ │ └── edit-product.html
│
│ └── settings/ # Configurações
│ ├── store-settings.html
│ └── user-settings.html

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** e **CSS3**  
- **JavaScript (Vanilla)**  
- **Firebase** (Autenticação e Banco de Dados)

---

## ▶️ Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/perepepeu/SmartBusiness.git
Abra o arquivo index.html no navegador para começar a usar o sistema.

🤝 Contribuição
Contribuições são bem-vindas!
Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novas funcionalidades.

📄 Licença
Este projeto está sob a licença MIT.
Consulte o arquivo LICENSE para mais informações.