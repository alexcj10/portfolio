// ========================================
// PROJECT DATA
// ========================================

export const projects = [
  {
    id: 'quillon',
    name: 'Quillon',
    tagline: 'Tag it. Find it. Done.',
    description: `A modern, lightweight, and intuitive note-taking application built with Vite, React, and TypeScript. Designed for speed and efficiency, it uses **Smart RAG**, **Commands**, and **Intelligent Tags** to capture, manage, and structure your notes effortlessly.

The heart of Quillon is **Pownin AI** — an advanced AI powered by a 5-stage retrieval pipeline including Query Expansion, Oracle Reranking, Context Chaining, Keyword Sniper, and Reflection Core. The system self-corrects and rewrites answers until they're perfect.

All data is stored locally using IndexedDB — no cloud servers, your data never leaves your device.`,
    features: [
      { icon: '🧠', title: 'Smart RAG 2.0', desc: '5-stage retrieval pipeline with query expansion, reranking, and self-correction' },
      { icon: '🏷️', title: 'Intelligent Tags', desc: 'Auto-organized Blue (folders), Green (context), Grey (loose), and Orange (group) tags' },
      { icon: '⚡', title: 'Command-Driven', desc: '@pai- for AI queries, @docs for docs, @orange- for tag groups — all from the search bar' },
      { icon: '🔒', title: 'Local-First', desc: 'IndexedDB storage — no cloud, no limits, complete privacy' },
      { icon: '📝', title: 'Nodes System', desc: 'Quick task management, smart calculator, instant translation, AI summarization' },
      { icon: '🎵', title: 'Interactive Sound', desc: 'Built-in sound system with Pomodoro timer and productivity tools' },
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Smart RAG', 'IndexedDB', 'CSS'],
    liveUrl: 'https://quillon.netlify.app',
    githubUrl: 'https://github.com/alexcj10/Quillon',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
    icon: '/assets/quillon.png',
    logoScale: 1.1,
  },
  {
    id: 'chatlytics',
    name: 'Chatlytics',
    tagline: 'Transform your WhatsApp chats into actionable insights.',
    description: `A powerful web application that transforms your WhatsApp chat exports into insightful analytics and beautiful visualizations. Upload your chat file and discover patterns in your conversations with **19+ analytics metrics**.

Features advanced ML capabilities including **VADER sentiment analysis** with custom Hinglish lexicon (+300 words), **LDA topic modeling** for unsupervised theme discovery, **Isolation Forest anomaly detection**, and a mathematical **Chat Health Score** formula.

The Conversation Role Analysis system maps behavioral personas — Initiator, Responder, Driver, Broadcaster, Listener, and Night Owl — using multi-factor activity heatmaps and response latency patterns.`,
    features: [
      { icon: '📊', title: 'Core Analytics', desc: 'Total messages, words, media, links, and most active users across timelines' },
      { icon: '🎭', title: 'Sentiment Analysis', desc: 'VADER engine with custom Hinglish/Roman-Hindi lexicon for Indian chat contexts' },
      { icon: '🔍', title: 'Topic Modeling', desc: 'LDA-based unsupervised theme discovery with temporal evolution tracking' },
      { icon: '🏥', title: 'Chat Health Score', desc: 'Mathematical formula combining sentiment, engagement, response, and balance metrics' },
      { icon: '🚨', title: 'Anomaly Detection', desc: 'Isolation Forest outlier detection with Z-Score significance scoring' },
      { icon: '👤', title: 'Role Analysis', desc: '6 behavioral personas mapped from activity heatmaps and latency patterns' },
    ],
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'VADER', 'LDA', 'scikit-learn', 'Isolation Forest'],
    liveUrl: 'https://chatlytics.netlify.app',
    githubUrl: 'https://github.com/alexcj10/chatlytics',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #c084fc)',
    icon: '/assets/chatlytics.png',
    logoScale: 1.1,
  },
  {
    id: 'klyo',
    name: 'Klyo',
    tagline: 'The Intelligent Workspace. Plan smarter, burn out less.',
    description: `An all-in-one workspace combining your calendar, tasks, and a **multi-specialist AI Swarm** powered by Hybrid Retrieval-Augmented Generation (RAG). Meet your executive elite team: @crock (lead assistant), @coach (burnout mentor), @analyst (data strategist), @planner (calendar coordinator), @frog (swarm orchestrator), and @historian (historical archivist).

Features advanced **temporal intelligence** with year-aware filtering, strict timing precision, and context-aware scheduling. The dynamic calendar offers Month, Week, Day, and Year views with deep navigation and fluid Framer Motion animations.

Includes a **GitHub-style activity heatmap**, productivity mood tracking with burnout analysis, and a unified task sidebar — all optimized for mobile-first with touch and swipe interactions.`,
    features: [
      { icon: '🤖', title: 'AI Swarm', desc: '6 specialized AI assistants with Hybrid RAG — @crock, @coach, @analyst, @planner, @frog, @historian' },
      { icon: '🗓️', title: 'Dynamic Calendar', desc: 'Month, Week, Day, Year views with deep navigation and Framer Motion transitions' },
      { icon: '📈', title: 'Activity Heatmap', desc: 'GitHub-style yearly analysis with adaptive year selector and unified productivity scoring' },
      { icon: '🧘', title: 'Mood Tracking', desc: 'Intuition tagging (Focus, Stress, Easy, Exhaust) with AI-powered burnout analysis' },
      { icon: '⚡', title: 'Groq-Powered', desc: 'Blazing fast execution with Groq llama-3.3-70b for near-instant AI responses' },
      { icon: '📱', title: 'Mobile-First', desc: 'Optimized for touch interactions with swipe navigation and responsive layouts' },
    ],
    techStack: ['React 18', 'TypeScript', 'Vite', 'Groq SDK', 'Hybrid RAG', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://klyo.netlify.app',
    githubUrl: 'https://github.com/alexcj10/klyo',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    icon: '/assets/klyo.png',
    logoScale: 0.85,
  },
  {
    id: 'ripenet',
    name: 'RipeNet',
    tagline: 'End-to-end deep learning for fruit analysis.',
    description: `An end-to-end computer vision suite for fruit species identification, ripeness classification, and shelf-life estimation using deep learning. The core innovation is the transition from discrete classification to **continuous regression**, modeling shelf-life as a time-based value in days.

**RipeNet V2** utilizes a **Multi-Task Learning (MTL) architecture** where a single EfficientNet-B0 backbone processes identity, classification, and regression simultaneously — reducing inference latency by over 50%.

The system identifies Apple, Banana, Mango, Orange, Papaya, and Pineapple. Features a **Fruit Vault** for local scan history, CLI tool for developers, and a deployed API on Hugging Face Spaces with 16GB RAM for rapid inference.`,
    features: [
      { icon: '🔬', title: 'Multi-Task Learning', desc: 'Single EfficientNet-B0 backbone for identity, classification, and regression simultaneously' },
      { icon: '📅', title: 'Shelf-Life Prediction', desc: 'Continuous regression predicting remaining days instead of static categories' },
      { icon: '🍎', title: 'Species Identification', desc: 'Supports Apple, Banana, Mango, Orange, Papaya, and Pineapple classification' },
      { icon: '💾', title: 'Fruit Vault', desc: 'Local browser storage for last 10 scans with IndexedDB — privacy first' },
      { icon: '⚡', title: 'CLI & API', desc: 'Premium CLI tool and instant API access for developers and power users' },
      { icon: '📊', title: 'Validated Metrics', desc: 'Benchmarked with MAE and RMSE against external validation datasets' },
    ],
    techStack: ['Python', 'FastAPI', 'EfficientNet-B0', 'TensorFlow', 'React', 'Vite', 'Docker', 'Hugging Face'],
    liveUrl: 'https://ripenet.vercel.app',
    githubUrl: 'https://github.com/alexcj10/ripenet',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    icon: '/assets/ripenet.png',
    logoScale: 1.6,
  },
];

export const skills = [
  'Python', 'TypeScript', 'React', 'Next.js', 'Vite', 'FastAPI',
  'TensorFlow', 'EfficientNet', 'RAG Systems', 'Prompt Engineering',
  'NLP', 'scikit-learn', 'Computer Vision', 'LDA', 'VADER',
  'Docker', 'Groq', 'IndexedDB', 'Framer Motion', 'Tailwind CSS',
  'Node.js', 'Hugging Face', 'Deep Learning', 'Multi-Task Learning',
];

export const profile = {
  name: 'Alexcj',
  fullName: 'Alexchandar Joshva',
  tagline: 'Building intelligent systems that think, analyze, and adapt.',
  bio: `I'm a Machine Learning engineer and Prompt Engineering specialist who builds products people actually use. From RAG-powered note apps to deep learning fruit analyzers — I ship full-stack AI products end-to-end.

Every project I build combines solid ML fundamentals with beautiful, user-centric interfaces. I believe the best AI isn't the most complex — it's the one that makes people's lives genuinely easier.`,
  github: 'https://github.com/alexcj10',
  linkedin: 'https://www.linkedin.com/in/alexcj10',
  email: 'alexcj10@gmail.com',
};
