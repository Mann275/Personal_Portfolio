export const projects = [
  {
    id: 1,
    slug: "finhack",
    title: "FinHack",
    category: "FinTech",
    shortDescription:
      "Finance management tool for tracking expenses and budgets.",
    fullDescription:
      "A finance management tool that helps users track their expenses, set budgets, and achieve their financial goals through data visualization. It provides intuitive charts and insights to make personal finance management effortless.",
    tech: ["React", "Node.js", "Chart.js", "MongoDB"],
    features: [
      "Expense tracking",
      "Budget management",
      "Data visualization",
      "Financial insights",
    ],
    image: "/projects/FinHack.jpeg",
    demoLink: "https://mann275.github.io/MSWD-Fintech-Site2.0/",
    repoLink: "https://github.com/Mann275/MSWD-Fintech-Site2.0",
  },
  {
    id: 2,
    slug: "prompt-jump",
    title: "ChatGPT PromptJump",
    category: "Chrome Extension",
    shortDescription:
      "Instant prompt navigation for long conversations. 100% local execution.",
    fullDescription:
      "A lightweight Chrome extension that lets users instantly jump to any prompt in long ChatGPT conversations. Designed for speed, simplicity, and complete privacy with 100% local execution. It solves the frustration of scrolling endlessly through long chat histories.",
    tech: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
    features: [
      "Instant jump to any message",
      "Fast in-chat search",
      "Clean floating UI panel",
      "Fully local & privacy-first",
    ],
    image: "/projects/Promptjump.png",
    demoLink:
      "https://chromewebstore.google.com/detail/chatgpt-promptjump/icbbbaodpbboephpmebcaejcgbcidcph?utm_source=item-share-cb",
    repoLink: "https://github.com/Mann275/ChatGPT__PromptJump",
  },
  {
    id: 3,
    slug: "crackit-ai",
    title: "CrackIt.AI",
    category: "EdTech Platform",
    shortDescription: "AI-based placement prep with roadmaps and mock tests.",
    fullDescription:
      "A smart placement prep platform built with the MERN stack and Python. It creates AI-based roadmaps, mock tests, and checklists based on student goals and skills, helping thousands of students streamline their placement journey.",
    tech: ["React", "Node.js", "MongoDB", "Python", "AI/ML"],
    features: [
      "AI-based learning roadmaps",
      "Real-time chatrooms",
      "Progress tracking",
      "Personalized learning paths",
    ],
    image: "/projects/Crackit.png",
    demoLink: "https://crackitai-app.vercel.app/",
    repoLink: "https://github.com/Mann275/CrackIt.AI",
  },

  {
    id: 4,
    slug: "todo-manager",
    title: "Todo Manager",
    category: "Productivity Tool",
    shortDescription:
      "Privacy-first todo manager — your tasks live on your device, not on any server.",
    fullDescription:
      "A clean and minimal todo manager built with React where your data never leaves your browser. All tasks are stored in your device's LocalStorage — no accounts, no backend, no tracking, and absolutely zero risk of data theft. Nobody can see your todos, not even the developer. Built for people who value simplicity and complete privacy in their daily task management.",
    tech: ["React", "JavaScript", "LocalStorage", "CSS"],
    features: [
      "100% local storage — no server, no database",
      "Create, complete & delete tasks instantly",
      "No sign-up or login required",
      "Full privacy — your data never leaves your device",
    ],
    image: "/projects/todo.png",
    demoLink: "https://my-todo-cyan.vercel.app/",
    repoLink:
      "https://github.com/Mann275/Personal-Notes-MERN-STACK/tree/main/React/SidesQuests/Todo",
  },
  {
    id: 5,
    slug: "overclocked",
    title: "OverClocked",
    category: "E-Commerce Platform",
    shortDescription:
      "Full-stack e-commerce platform for PC hardware with multi-role access.",
    fullDescription:
      "OverClocked is a specialized e-commerce platform built for PC builders, gamers, and hardware enthusiasts. It supports three roles — Customer, Seller, and Admin — each with a dedicated dashboard and experience. Customers can browse GPUs, CPUs, RAM, SSDs, cooling solutions and more, manage their cart and wishlist, and pay securely via Razorpay. Sellers can list hardware with detailed specs, manage inventory, and track orders. Admins get full control over users, seller approvals, and platform analytics. Built with the MERN stack, JWT auth, Cloudinary for image storage, and Nodemailer for email workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Three-role system: Customer, Seller & Admin",
      "Razorpay payment gateway integration",
      "JWT auth with access & refresh token flow",
      "Cloudinary image upload with crop support",
      "wishlist & order tracking system",
    ],
    image: "/projects/overclocked.png",
    demoLink: "https://over-clocked.vercel.app/",
    repoLink: "https://github.com/Mann275/E-commerce",
  },
  {
    id: 6,
    slug: "emergency-qr",
    title: "Emergency QR",
    category: "Full-Stack Web App",
    shortDescription:
      "Full-stack emergency profile system with a single stable QR code for instant access.",
    fullDescription:
      "Emergency QR is a full-stack emergency profile system. Users create a single profile that generates one stable QR code for instant, read-only access during emergencies. It features a public emergency view showing only critical data, owner-only edits via per-profile edit tokens, and a mobile-first UI with multilingual support (EN/HI/GU). Built for reliability and quick access when it matters most.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase Auth"],
    features: [
      "One stable QR code per user",
      "Public emergency view for quick critical data access",
      "Owner-only profile edits via JWT tokens",
      "Mobile-first UI with multilingual support",
    ],
    image: "https://ik.imagekit.io/shubhampathak/emergency-qr/1.jpeg",
    demoLink: "https://emergencyqr-gen.vercel.app/",
    repoLink: "https://github.com/Mann275/Emergency_QR",
  },
];
