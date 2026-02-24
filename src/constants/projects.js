import { projectImages } from "./assets";

export const PROJECTS = [
  /*  {
      title: "Career Chatbot",
      image: projectImages.careerChatbot,
      description: {
        summary: "A personal AI assistant chatbot to act as a digital representative of Yuelin Liu.",
        features: [
          "Acts as a digital representative of Yuelin Liu",
          "Initialized with Yuelin's professional information from a summary.txt file and a linkedin.pdf",
          "Interactive and helpful to visitors on a website",
          "Can answer questions about Yuelin's career, skills, and background",
          "Records questions it cannot answer",
          "Records contact details if a user wishes to get in touch",
          "Uses a Gemini model with a toolset for recording functions"
        ]
      },
      url: "https://huggingface.co/spaces/liuyuelintop/career_chatbots",
      technologies: {
        main: ["OpenAI","Agents","Gradio", "Python"],
        others: ["Gemini"]
      } 
    },*/
    {
      title: "Project Management Platform",
      image: projectImages.projectManagment ,
      description: {
        summary:
          "A full-stack , live project management application built with React frontend and Node.js/Express backend. Features multiple workspaces, task tracking, team management, analytics, secure auth via Clerk, and background jobs — ideal for teams to organize and track work efficiently.",
        features: [
          "Multiple Workspaces: Create and switch between isolated workspaces with their own projects, tasks, and team members",
          "Project & Task Management: Create projects, assign tasks with due dates/status, and track real-time progress",
          "Analytics Dashboard: Visualize completion rates, project progress, team size, and key performance metrics",
          "User & Team Management: Invite members, assign roles/permissions via Clerk, and monitor activity",
          "Secure Authentication: Clerk for sign-up, login (Google/email), user profiles, and organization-based access",
          "Background Jobs: Inngest for async processing (e.g., notifications, reminders, webhooks from Clerk)",
          "Data Layer: Prisma ORM + Neon serverless PostgreSQL for type-safe queries and scalable storage",
          "Modern Responsive UI: Built with Tailwind CSS, Lucide icons, and Redux Toolkit for smooth state handling"
        ]
      },
      url: "https://project-managment-omega.vercel.app/",
      technologies: {
        main: [
          "React",
          "Redux Toolkit",
          "Tailwind CSS",
          "Lucide React",
          "Node.js",
          "Express.js",
          "Clerk (Authentication)",
          "Prisma",
          "Neon (Postgres)",
          "Inngest"
        ],
        others: [
          "Vercel (deployment)",
          "Git",
          "ESLint / Prettier"
        ]
      }
    },
    {
      title: "Estate - Real Estate Platform",
      image: projectImages.Estate, 
      description: {
        summary:
          "A responsive real estate web application built with React and Vite. Users can browse, search, and explore property listings with a clean, modern UI optimized for desktop and mobile devices.",
        features: [
          "Property Listing Cards: Display properties with images, details, prices, and key highlights",
          "Fully Responsive Design: Seamless experience across mobile, tablet, and desktop using Tailwind CSS media queries and flexible layouts",
          "Search & Browse Functionality: Intuitive interface to discover properties (filters and search if implemented)",
          "Clean & Reusable Components: Modular React components for headers, footers, cards, and sections",
          "Fast Development & Build: Powered by Vite for lightning-fast hot module replacement and optimized production builds",
          "Modern Styling: Utility-first Tailwind CSS for rapid, consistent, and customizable design"
        ]
      },
      url: "https://estate-three-mu.vercel.app/",
      technologies: {
        main: [
          "React",
          "Vite",
          "Tailwind CSS",
          "JavaScript / JSX"
        ],
        others: [
          "Vercel (deployment)",
          "Git",
          "ESLint / Prettier (for code quality)"
        ]
      }
    },
    {
      title: "Savvy Drop",
      image: projectImages.SavvyDrop, 
      description: {
        summary:
          "A full-stack price tracking platform tailored for Tunisian users, monitoring daily price changes (in TND) across local and international e-commerce sites (Zara TN, Jumia, Mytek, Amazon, etc.). It scrapes products, visualizes trends with interactive Recharts, and sends email alerts on meaningful price drops or increases — built with Next.js, Supabase, Firecrawl, and Resend.",
        features: [
          "Daily Automated Scraping: Cron job runs every day to scrape and update product prices using Firecrawl",
          "Price Trend Visualization: Interactive line charts powered by Recharts showing price history, drops, and increases in TND",
          "Intelligent Email Alerts: Beautiful, responsive HTML emails sent via Resend when prices drop significantly",
          "User Dashboard: Secure authenticated area to add/remove products, view tracked items, and explore price history",
          "TND-Focused Tracking: All prices displayed and compared in Tunisian Dinars with proper formatting",
          "Supabase Backend: PostgreSQL for users, products, price history + real-time updates and RLS security",
          "Responsive & Modern UI: Mobile-first design with Tailwind CSS, clean toasts, and intuitive flow",
          "Robust Error Handling: Graceful fallbacks, logging, and retry logic for reliable scraping and notifications"
        ]
      },
      url: "https://savvy-drop.vercel.app/",
      technologies: {
        main: [
          "Next.js (App Router)",
          "Supabase (PostgreSQL + Auth)",
          "Firecrawl (Web Scraping)",
          "Resend (Transactional Emails)",
          "Recharts (Interactive Price Charts)",
          "Tailwind CSS",
          "Vercel Cron Jobs"
        ],
        others: [
          "TypeScript",
          "Environment Variables & Security",
          "Sonner (Toast Notifications)",
          "Lucide Icons",
          "Responsive Design (Mobile-first)",
          "ESLint / Prettier",
          "Git & Vercel Deployment"
        ]
      }
    },
    {
      title: "ChronoLit",
      image: projectImages.ChronoLit,
      description: {
        summary:
          "A full-stack MERN e-commerce platform specializing in premium watches. Features product browsing, search/filtering, cart, checkout, user authentication, and responsive UI — built end-to-end with modern best practices for a seamless shopping experience.",
        features: [
          "Product Catalog: Dynamic listings of premium watches with images, details, prices, and filtering/search capabilities",
          "User Authentication: Secure login/register system (JWT or similar) for personalized shopping and order history",
          "Shopping Cart & Checkout Flow: Add/remove items, persist cart, and simulate/order processing with smooth UX",
          "Responsive Design: Mobile-first UI that adapts perfectly to desktop, tablet, and phone screens",
          "RESTful APIs: Built with Node.js + Express.js for products, users, orders, and cart management",
          "MongoDB Data Modeling: Schemas for products, users, carts, and orders with efficient querying",
          "Modern Frontend: React.js with Tailwind CSS for clean, reusable components and premium styling"
        ]
      },
      url: "https://your-watch-store.vercel.app/", // ← Replace with your actual live deployment URL (Vercel, Render, etc.)
      technologies: {
        main: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "RESTful APIs"
        ],
        others: [
          "JWT Authentication",
          "Vercel / Render (deployment)",
          "Git",
          "Postman (API testing)",
          "ESLint / Prettier"
        ]
      }
    },
  ]