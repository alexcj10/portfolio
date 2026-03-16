// ========================================
// PROJECT DATA
// ========================================

export const projects = [
  {
    id: 'quillon',
    name: 'Quillon',
    tagline: 'Tag it. Find it. Done.',
    shortSummary: 'A blazing-fast, command-driven note taking application powered by custom AI extraction pipelines and dynamic tagging.',

    description: `**Quillon** is a modern, lightweight, and intuitive note-taking application designed for speed and efficiency. It uses **Prompt Engineering**, **Commands**, and **Intelligent Tags** to capture, manage, and structure your notes effortlessly.

The heart of Quillon is **Pownin**, an Advanced AI powered by an intelligent querying pipeline featuring Context Chaining and Keyword Snipping. Interact directly with the AI via the fast \`@pai-\` command for instant text or rich markdown responses.

Experience true command-driven workflows with a powerful hyper-architect interface (\`@new-\`), dynamic nodes, instantaneous math evaluation, 100+ language translations, an intelligent Pomodoro timer, and a Zen Quiz Mode — all while keeping your data **100% locally secure** using IndexedDB.`,
    features: [
      { icon: '🧠', title: 'Pownin AI (RAG 2.0)', desc: '5-stage retrieval pipeline with query expansion, oracle reranking, and self-correction' },
      { icon: '🏷️', title: 'Tag & Group Logic', desc: 'Auto-organized folder/context tags + Orange Group tags for minimal clutter' },
      { icon: '⚡', title: 'Hyper-Architect', desc: 'Create fully-featured notes directly from the search bar with inline attributes using @new-' },
      { icon: '📝', title: 'Intelligent Commands', desc: 'Fetch wiki/defines, instant math solving (@c-), and inline translation (@t-)' },
      { icon: '🎵', title: 'Sound & Productivity', desc: 'Haptic audio feedback, Pomodoro timer, and an automated Zen Quiz mode' },
      { icon: '🔒', title: 'Boundless Local Storage', desc: 'Zero cloud servers—uncapped IndexedDB capacity scaling with your device constraints' },
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'AI Models', 'IndexedDB', 'CSS'],
    liveUrl: 'https://quillon.netlify.app',
    githubUrl: 'https://github.com/alexcj10/Quillon',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
    icon: '/assets/quillon.png',
    logoScale: 0.85,
  },
  {
    id: 'chatlytics',
    name: 'Chatlytics',
    tagline: 'Transform your WhatsApp chats into actionable insights.',
    shortSummary: 'A powerful analytics engine discovering deep conversational patterns through unsupervised topic modeling and anomaly detection.',

    description: `A modern web application that transforms your WhatsApp chat exports into insightful analytics and beautiful visualizations. Upload your chat file and discover patterns in your conversations with 19+ analytics metrics.

Features advanced ML capabilities including **VADER sentiment analysis** augmented with a custom **Hinglish/Roman-Hindi Lexicon** to handle code-switching. It leverages **LDA (Latent Dirichlet Allocation)** for unsupervised topic modeling to discover prominent themes.

Our algorithmic suite includes a sophisticated **Chat Health Score** calculating conversational fitness via a mathematical formula (combining sentiment, engagement, response, and balance), along with **Isolation Forest** anomaly detection using a custom Z-Score to pinpoint meaningful statistical spikes or drops in activity.`,
    features: [
      { icon: '📊', title: 'Deep Analytics', desc: 'Monitor daily, weekly, monthly, quarterly and yearly trends alongside basic stats' },
      { icon: '🎭', title: 'Hinglish Sentiment', desc: 'Custom VADER engine processing 300+ Hinglish/Roman-Hindi terms for local context' },
      { icon: '🔍', title: 'Topic Discovery', desc: 'LDA-based unsupervised theme extraction with temporal evolution tracking' },
      { icon: '🏥', title: 'Chat Health Algorithim', desc: 'Mathematical modeling of conversational fitness: Sentiment, Engagement, Response, Balance' },
      { icon: '🚨', title: 'Anomaly Detection', desc: 'Isolation forest identifying distinct statistical spikes and drops mapped via custom Z-scores' },
      { icon: '👤', title: 'Role Mapping (CRA)', desc: 'Identifies 6 behavioral personas: Initiator, Responder, Driver, Broadcaster, Listener, & Night Owl' },
    ],
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'VADER', 'LDA', 'scikit-learn', 'Isolation Forest'],
    liveUrl: 'https://chatlytics.netlify.app',
    githubUrl: 'https://github.com/alexcj10/chatlytics',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #c084fc)',
    icon: '/assets/chatlytics.png',
    logoScale: 0.85,
  },
  {
    id: 'klyo',
    name: 'Klyo',
    tagline: 'The Intelligent Workspace. Plan smarter, burn out less.',
    shortSummary: 'A unified workspace and temporal-aware calendar designed to reduce cognitive load, track burnout, and streamline scheduling.',

    description: `Klyo isn't just a calendar; it's a unified environment designed to reduce cognitive load and keep you in the flow.

Meet your executive elite team: a multi-specialist Swarm powered by **Hybrid RAG** (@crock, @coach, @analyst, @planner, @frog, and @historian). Features advanced **temporal intelligence** with year-aware filtering, strict timing precision, and context-aware scheduling.

The dynamic calendar offers Month, Week, Day, and Year views with deep navigation and fluid Framer Motion animations. Includes a **GitHub-style activity heatmap**, productivity mood tracking (🧠 Focus, ⚡ Stress, 🍀 Easy, 🔋 Exhaust) with burnout analysis, and a unified task sidebar. All optimized for mobile-first with touch interactions.`,
    features: [
      { icon: '🤖', title: 'AI Swarm', desc: '6 specialized AI assistants with Hybrid Context-Aware RAG — @crock, @coach, @analyst, @planner, @frog, @historian' },
      { icon: '🗓️', title: 'Dynamic Calendar', desc: 'Month, Week, Day, Year views with deep navigation and fluid Framer Motion transitions' },
      { icon: '🌍', title: 'World Clock', desc: 'Track time across 1000+ cities instantly to stay in sync with international teams' },
      { icon: '📈', title: 'Activity Heatmap', desc: 'GitHub-style yearly analysis with adaptive year selector and unified productivity scoring' },
      { icon: '🧘', title: 'Mood Tracking', desc: 'Intuition tagging (Focus, Stress, Easy, Exhaust) with AI-powered burnout analysis' },
      { icon: '⚡', title: 'Groq-Powered', desc: 'Blazing fast execution with Groq llama-3.3-70b for near-instant AI responses' },
    ],
    techStack: ['React 18', 'TypeScript', 'Vite', 'Groq SDK', 'Hybrid RAG', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://klyo.netlify.app',
    githubUrl: 'https://github.com/alexcj10/klyo',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    icon: '/assets/klyo.png',
    logoScale: 0.75,
  },
  {
    id: 'ripenet',
    name: 'RipeNet',
    tagline: 'End-to-end deep learning for fruit analysis.',
    shortSummary: 'An end-to-end computer vision suite using deep learning for fruit species identification and continuous shelf-life regression.',

    description: `An end-to-end computer vision suite for fruit species identification, ripeness classification, and shelf-life estimation using deep learning. The core innovation is the transition from discrete classification to **continuous regression**, modeling shelf-life as a time-based value in days.

**RipeNet V2** utilizes a **Multi-Task Learning (MTL) architecture** where a single EfficientNet-B0 backbone processes identity, classification, and regression simultaneously. This architecture achieves **~2.3x faster** inference and a **10.3% error reduction (1.53 MAE)** on external benchmarks compared to the V1 sequential baseline.

For developers and power users, RipeNet offers a **Premium CLI Tool** (\`pip install .\`) for instant terminal scanning, and a lightning-fast API deployed on Hugging Face Spaces (via Docker). The system identifies 6 fruits: Apple, Banana, Mango, Orange, Papaya, and Pineapple.`,
    features: [
      { icon: '🔬', title: 'Multi-Task Learning', desc: 'Single EfficientNet-B0 backbone for identity (77.5%), classification (70.8%), and regression simultaneously' },
      { icon: '📅', title: 'Shelf-Life Prediction', desc: 'Continuous regression predicting remaining days (1.53 MAE) instead of static categories' },
      { icon: '🍎', title: 'Roboust Validation', desc: 'Stress-tested on independent 120-image external benchmark to ensure production generalization' },
      { icon: '💾', title: 'Fruit Vault', desc: 'Local browser storage for last 10 scans with IndexedDB — privacy first' },
      { icon: '⚡', title: 'CLI & API', desc: 'Premium installable CLI tool (ripenet) and instant generic API access via cURL' },
      { icon: '📊', title: 'Data Strategy', desc: 'Trained on ~10,000 images with negative label jittering to model expiration depth beyond 0 days' },
    ],
    techStack: ['Python', 'FastAPI', 'EfficientNet-B0', 'TensorFlow', 'React', 'Vite', 'Docker', 'Hugging Face'],
    liveUrl: 'https://ripenet.vercel.app',
    githubUrl: 'https://github.com/alexcj10/ripenet',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    icon: '/assets/ripenet.svg',
    logoScale: 0.85,
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
  bio: `I'm a recent graduate and aspiring Machine Learning & AI Engineer. My focus is entirely on the intelligence behind the application—from sentiment analysis classifiers to deep learning computer vision models. I use AI to rapidly prototype my application frontends ("vibe coding"), allowing me to ship complete products while dedicating my deep technical expertise to the core machine learning models.

Every project I build combines solid ML fundamentals with beautiful, user-centric interfaces. I believe the best AI isn't the most complex — it's the one that makes people's lives genuinely easier.`,
  github: 'https://github.com/alexcj10',
  linkedin: 'https://www.linkedin.com/in/alexcj10',
  email: 'alexcj10@gmail.com',
};
