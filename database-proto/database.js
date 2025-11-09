// Dados para os cards com as novas cores e estética
const CARDSDATA = [
    {
        title: "Livros Digitais",
        subtitle: "A sua biblioteca completa, agora no seu bolso.",
        icon: "Download",
        // Azul Forte (Canto superior esquerdo) - Alto contraste
        color: "text-white",
        bgColor: "bg-black",
        link: "/categoria/digitais",
        image: `bg-[url('http://localhost:7850/files/Gemini_Generated_Image_5p741h5p741h5p74.png')] bg-center bg-cover`// Imagem de fundo simulada
    },
    {
        title: "Ler Online",
        subtitle: "Acesso rápido e gratuito. Comece a ler agora mesmo.",
        icon: "BookOpen",
        // Azul Claro (Canto superior direito) - Fundo mais claro
        color: "text-white",
        bgColor: "bg-blue-800",
        link: "/categoria/ler-online",
        image: `bg-[url('http://localhost:7850/files/Gemini_Generated_Image_gqnkwegqnkwegqnk.png')] bg-center bg-cover` // Imagem de fundo simulada
    },
    {
        title: "Livros Físicos",
        subtitle: "A tradição do livro impresso com entrega expressa.",
        icon: "Package",
        // Cinza Forte (Canto inferior esquerdo) - Alto contraste
        color: "text-white",
        bgColor: "bg-black",
        link: "/categoria/fisicos",
        image: "bg-[url('http://localhost:7850/files/Gemini_Generated_Image_tl5s3itl5s3itl5s.png')] bg-center bg-cover" // Imagem de fundo simulada
    },
    {
        title: "Livros Usados",
        subtitle: "Sustentabilidade e economia em edições de colecionador.",
        icon: "Recycle",
        // Cinza Claro (Canto inferior direito) - Fundo mais claro
        color: "text-black",
        bgColor: "",
        link: "/categoria/usados",
        image: `bg-[url('http://localhost:7850/files/grok-image-6d0c3601-8a3a-4ee0-86bc-e86f1b0ed95c.png')] bg-center bg-cover` // Imagem de fundo simulada
    },
]

const BOOKS = [
  { 
    id: 1, 
    title: 'Inteligência Artificial Moderna', 
    author: 'Dr. Carlos Silva', 
    price: 600.00, 
    category: 'Tecnologia', 
    rating: 4.8, 
    url: 'https://img.freepik.com/premium-vector/creative-vector-modern-book-cover-design-company-brochure-flyer-layout-template-annual-report_737666-108.jpg', 
    cover: 'bg-gradient-to-br from-blue-500 to-purple-600', 
    reviews: 234, 
    slug: 'inteligencia-artificial-moderna',
    desc: 'Um guia abrangente sobre os fundamentos e aplicações modernas da inteligência artificial, explorando machine learning e redes neurais.',
    pages: 350 
  },
  { 
    id: 2, 
    title: 'Marketing Digital Avançado', 
    author: 'Ana Santos', 
    price: 550.00, 
    category: 'Negócios', 
    rating: 4.6, 
    cover: 'bg-gradient-to-br from-orange-500 to-red-600', 
    reviews: 189, 
    url: 'https://api.rekonise.com/storage/serve/b64_NTMyMDkyLzE3NTI2NTg5MjI1NDgtMF9xeXFoUDRDQnNKM3RlUlczLmpwZw', 
    slug: 'marketing-digital-avancado',
    desc: 'Estratégias avançadas para dominar o marketing online, incluindo SEO, conteúdo e automação.',
    pages: 280 
  },
  { 
    id: 3, 
    title: 'Python para Data Science', 
    author: 'João Oliveira', 
    price: 540.90, 
    category: 'Tecnologia', 
    rating: 4.9, 
    cover: 'bg-gradient-to-br from-green-500 to-teal-600', 
    reviews: 412, 
    url: 'https://m.media-amazon.com/images/I/61hPZ6RzwxL._UF1000,1000_QL80_.jpg', 
    slug: 'python-para-data-science',
    desc: 'Aprenda Python para análise de dados, visualização e machine learning com exemplos práticos.',
    pages: 420 
  },
  { 
    id: 4, 
    title: 'Gestão de Projetos Ágil', 
    author: 'Maria Costa', 
    price: 440.90, 
    category: 'Negócios', 
    rating: 4.7, 
    cover: 'bg-gradient-to-br from-pink-500 to-purple-600', 
    reviews: 156, 
    url: 'https://altabooks.com.br/wp-content/uploads/2022/06/3D_GestaoPorProcessos.png', 
    slug: 'gestao-projetos-agil',
    desc: 'Métodos ágeis como Scrum e Kanban para gerenciar projetos com eficiência e flexibilidade.',
    pages: 310 
  },
  { 
    id: 5, 
    title: 'Design de Interfaces UX/UI', 
    author: 'Pedro Lima', 
    price: 590.90, 
    category: 'Design', 
    rating: 4.8, 
    cover: 'bg-gradient-to-br from-indigo-500 to-blue-600', 
    reviews: 298, 
    url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXkXg5l_SPZhSUnwpE46OQO6xYPM24Gs9fVwogNqaE0YgZ_TaAiJKxrhf6WF3S0J4EFilRv1tBk7yaLhAteFqdymSzLiRz57QYmg4ZkaUksDvTSBYcRtmF0JcXP5Ya1mItpk3uqkIghGo/s1600/11.jpg', 
    slug: 'design-interfaces-ux-ui',
    desc: 'Princípios essenciais de design centrado no usuário para criar interfaces intuitivas e atrativas.',
    pages: 290 
  },
  { 
    id: 6, 
    title: 'Blockchain e Criptomoedas', 
    author: 'Rafael Mendes', 
    price: 640.90, 
    category: 'Tecnologia', 
    rating: 4.5, 
    cover: 'bg-gradient-to-br from-yellow-500 to-orange-600', 
    reviews: 167, 
    url: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668002322/the-truth-about-crypto-9781668002322_hr.jpg', 
    slug: 'blockchain-criptomoedas',
    desc: 'Entenda a tecnologia blockchain, criptomoedas e suas aplicações no mundo financeiro.',
    pages: 380 
  },
  { 
    id: 7, 
    title: 'Mindfulness e Produtividade', 
    author: 'Laura Ferreira', 
    price: 340.90, 
    category: 'Desenvolvimento Pessoal', 
    rating: 4.9, 
    cover: 'bg-gradient-to-br from-teal-500 to-green-600', 
    reviews: 523, 
    url: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550685003i/43808723.jpg', 
    slug: 'mindfulness-produtividade',
    desc: 'Técnicas de mindfulness para aumentar a produtividade e reduzir o estresse no dia a dia.',
    pages: 250 
  },
  { 
    id: 8, 
    title: 'Fotografia Profissional', 
    author: 'Bruno Alves', 
    price: 490.90, 
    category: 'Design', 
    rating: 4.7, 
    cover: 'bg-gradient-to-br from-red-500 to-pink-600', 
    reviews: 201, 
    slug: 'fotografia-profissional',
    url: 'https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:good,w_700/legacy_dam/en-us/S001788924/MXP30706-CML-ConsumerModularLibrary2-Personalized-Keepsakes-Product-Tile-Photobook-001',
    desc: 'Dicas e truques profissionais para capturar imagens impressionantes com qualquer câmera.',
    pages: 320 
  },
];
const categories = [
  {
    id: 1,
    name: 'Tecnologia',
    description: 'Livros sobre as últimas tendências e inovações tecnológicas.',
    image: 'https://img.freepik.com/premium-vector/creative-vector-modern-book-cover-design-company-brochure-flyer-layout-template-annual-report_737666-108.jpg',
    subcategories: ['Inteligência Artificial', 'Programação', 'Data Science', 'Blockchain']
  },
  {
    id: 2,
    name: 'Negócios',
    description: 'Estratégias e insights para empreendedores e profissionais de negócios.',
    image: 'https://api.rekonise.com/storage/serve/b64_NTMyMDkyLzE3NTI2NTg5MjI1NDgtMF9xeXFoUDRDQnNKM3RlUlczLmpwZw',
    subcategories: ['Marketing', 'Gestão de Projetos', 'Finanças', 'Empreendedorismo']
  },
  {
    id: 3,
    name: 'Design',
    description: 'Guias e inspirações para designers gráficos e de interfaces.',
    image: 'https://m.media-amazon.com/images/I/61hPZ6RzwxL._UF1000,1000_QL80_.jpg',
    subcategories: ['UX/UI', 'Fotografia', 'Ilustração', 'Tipografia']
  },
  {
    id: 4,
    name: 'Desenvolvimento Pessoal',
    description: 'Livros para melhorar habilidades pessoais e profissionais.',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550685003i/43808723.jpg',
    subcategories: ['Produtividade', 'Mindfulness', 'Liderança', 'Comunicação']
  }
];
module.exports = {CARDSDATA, BOOKS, categories}