<div align="center">
  <h1>🍕 DonnaPizza</h1>
  <p><strong>Um site moderno para a pizzaria Donna Pizza</strong></p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
  [![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
  [![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)
</div>

---

## 📖 Sobre o Projeto

O site **DonnaPizza** é uma aplicação web front-end moderna e rápida, construída com **React** e **Vite**. Este projeto serve como uma vitrine digital e um sistema de pedidos para a pizzaria Donna Pizza, proporcionando uma experiência de usuário interativa e de alta qualidade.

## ✨ Funcionalidades

- **Desempenho Excelente**: Graças à utilização do Vite.
- **UI/UX Moderna**: Design focado na estética e facilidade de uso, com cores vibrantes e layouts responsivos.
- **Cardápio Interativo**: Visualize as pizzas, adicione ao carrinho e personalize seus pedidos.

## 🛠️ Tecnologias Utilizadas

### Front-end
- **[React](https://reactjs.org/)**: Biblioteca para a construção de interfaces de usuário dinâmicas e reativas.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build e desenvolvimento extremamente rápida.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização responsiva e moderna.

### Back-end & Banco de Dados
- **[Python](https://www.python.org/)**: Linguagem utilizada para a lógica e processamento no servidor.
- **[Django](https://www.djangoproject.com/)**: Framework robusto para o desenvolvimento da API RESTful de forma ágil e segura.
- **[Supabase](https://supabase.com/)**: Banco de dados relacional PostgreSQL hospedado na nuvem, garantindo confiabilidade e escalabilidade.

### Hospedagem & Infraestrutura
- **[Vercel](https://vercel.com/)**: Plataforma de nuvem utilizada para hospedar o Front-end, oferecendo carregamento rápido e otimizado globalmente.
- **[Render](https://render.com/)**: Serviço de hospedagem em nuvem utilizado para rodar de forma estável o servidor de Back-end (Django API).

## 🎨 Design & Identidade Visual

A interface do site DonnaPizza foi desenhada seguindo as melhores práticas de UI/UX, com foco em proporcionar uma experiência gastronômica digital premium e dinâmica.

A paleta de cores foi intencionalmente selecionada para fugir dos clichês de fast-food (como tons saturados de vermelho e amarelo). Em vez disso, adotamos um tom de **verde-azul elegante (Teal #2A7F7F)** como cor primária para sugerir sofisticação e frescor nos ingredientes, combinado com um **coral vibrante (Coral #FF5B67)** para botões de ação e preços, gerando excelente contraste visual. Um toque sutil de **amarelo suave (Accent #FFFF8D)** traz energia a detalhes específicos, mantendo uma base de fundo off-white clara que prioriza a escaneabilidade das informações.

A tipografia do projeto utiliza fontes modernas do Google Fonts: a **Outfit** para títulos e elementos de destaque, conferindo uma personalidade geométrica e contemporânea que remete a uma pizzaria gourmet, e a clássica **Inter** para os textos de apoio e controles de interface, garantindo excelente legibilidade em dispositivos móveis. Além disso, o sistema conta com efeitos visuais como *glassmorphism*, micro-animações interativas e elevação de sombra dinâmica nos cards de produtos que tornam o uso do site extremamente orgânico e agradável.

## 🚀 Como Iniciar

Siga as instruções abaixo para rodar o projeto localmente em sua máquina.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados.

### Instalação e Execução

O projeto possui duas partes: o **Front-end** (React + Vite) e o **Back-end** (Python + Django). Para que tudo funcione corretamente, você deve iniciar os dois.

#### 1. Iniciando o Back-end (Django)

1. Abra um terminal na pasta raiz do projeto (`DonnaPizza`).
2. Ative o ambiente virtual Python:
   * **Windows**: `.\venv\Scripts\activate`
   * **Linux/Mac**: `source venv/bin/activate`
3. Entre na pasta do back-end e instale as dependências (se necessário):
   ```sh
   cd backend
   pip install -r requirements.txt
   ```
4. Inicie o servidor do Django:
   ```sh
   python manage.py runserver
   ```

#### 2. Iniciando o Front-end (React)

1. Abra um **novo** terminal na pasta raiz do projeto (`DonnaPizza`).
2. Instale as dependências do Node:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento do Vite:
   ```sh
   npm run dev
   ```
