import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  AchievementItem
} from '../types';

export const PERSONAL_INFO = {
  name: "Harshita Laxman Moger",
  shortName: "Harshita",
  title: "AI/ML Engineer | Deep Learning | Generative AI",
  status: "Open to AI/ML Internships & Graduate Opportunities",
  location: "Bengaluru, Karnataka, India",
  email: "harshitalaxman11@gmail.com",
  phone: "+91 9591034066",
  github: "https://github.com/harshita-spec",
  linkedin: "https://www.linkedin.com/in/harshita-laxman-moger",
  leetcode: "https://leetcode.com/u/Harshita_Laxman_07",
  resumePath: "/Harshita_Laxman_Moger_Resume.pdf",
  photoPath: "/harshita-moger.jpg",
  cgpa: "9.04 / 10",
  institution: "SJB Institute of Technology (SJBIT), Bengaluru",
  pucScore: "93.83%",
  bioShort: "AI/ML Engineering student passionate about building intelligent applications, exploring multimodal deep learning, and engineering explainable AI systems. Experienced in developing deepfake forensic pipelines, RAG-grounded academic platforms, and full-stack software.",
  bioLong: "I am an Artificial Intelligence and Machine Learning engineering student at SJB Institute of Technology (SJBIT), Bengaluru, maintaining a CGPA of 9.04/10. My technical focus centers on bridging research-grade deep learning architectures with production-ready software engineering.\n\nFrom engineering multimodal forensic pipelines that detect synthetic media with Explainable AI (XAI) to creating full-stack campus platforms with RAG-grounded academic assistants (CampusFlow), I thrive on understanding model behavior, tackling real-world edge cases, and delivering reliable software.",
};

export const HIGHLIGHT_STATS = [
  { label: "Academic CGPA", value: "9.04 / 10", sub: "SJBIT Bengaluru", icon: "GraduationCap" },
  { label: "LeetCode Solved", value: "100+", sub: "Data Structures & Algos", icon: "Code2" },
  { label: "Core AI Projects", value: "4 Major", sub: "Multimodal, XAI & RAG", icon: "Cpu" },
  { label: "NPTEL Certified", value: "2 Courses", sub: "Deep Learning & Modern C++", icon: "Award" },
];

export const ABOUT_PILLARS = [
  {
    title: "Multimodal Deep Learning",
    description: "Developing cross-attention and score-fusion architectures that combine visual facial cues (ResNet50), audio spectrogram frequencies (2D CNN), and linguistic embeddings (DistilBERT).",
    icon: "Layers",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/30",
    accent: "text-purple-400"
  },
  {
    title: "Explainable & Responsible AI",
    description: "Integrating Grad-CAM heatmaps, frequency-domain FFT forensics, Error Level Analysis (ELA), and token attribution so predictions are interpretable, verifiable, and transparent.",
    icon: "ShieldCheck",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    accent: "text-cyan-400"
  },
  {
    title: "Generative AI & RAG",
    description: "Designing Retrieval-Augmented Generation workflows (NexusAI) to index, chunk, and retrieve syllabus documents, providing hallucination-resistant academic assistance.",
    icon: "Sparkles",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
    accent: "text-violet-400"
  },
  {
    title: "Full-Stack AI Engineering",
    description: "Translating ML models into deployable web products using FastAPI, Celery task queues, PostgreSQL, Redis, React 18, TypeScript, and Docker containerization.",
    icon: "Server",
    color: "from-blue-500/20 to-teal-500/20",
    border: "border-blue-500/30",
    accent: "text-blue-400"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Terminal",
    description: "Core languages used for algorithms, machine learning modeling, and backend systems.",
    skills: [
      { name: "Python", highlight: true, badge: "Primary" },
      { name: "Java", highlight: true },
      { name: "SQL", highlight: true },
      { name: "C", highlight: false },
      { name: "C++", highlight: false, badge: "NPTEL Certified" },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: false }
    ]
  },
  {
    title: "AI & Machine Learning",
    iconName: "BrainCircuit",
    description: "Foundational and advanced machine learning modeling, evaluation, and interpretability.",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "Deep Learning", highlight: true, badge: "NPTEL Certified" },
      { name: "Explainable AI (XAI)", highlight: true, badge: "Core Focus" },
      { name: "Supervised & Unsupervised Learning", highlight: false },
      { name: "Feature Engineering", highlight: false },
      { name: "Model Evaluation & Metrics", highlight: false },
      { name: "Cross-Validation", highlight: false }
    ]
  },
  {
    title: "Computer Vision & Multimodal AI",
    iconName: "Eye",
    description: "Visual feature extraction, face manipulation forensics, audio representations, and fusion.",
    skills: [
      { name: "Computer Vision", highlight: true },
      { name: "ResNet50 / CNNs", highlight: true },
      { name: "Grad-CAM Heatmaps", highlight: true },
      { name: "Log-Mel Spectrograms", highlight: true },
      { name: "2D FFT Frequency Analysis", highlight: false },
      { name: "Error Level Analysis (ELA)", highlight: false },
      { name: "Face Detection & Alignment", highlight: false },
      { name: "Multi-Head Cross-Attention", highlight: true }
    ]
  },
  {
    title: "NLP & Generative AI",
    iconName: "MessageSquareCode",
    description: "Language understanding, text embeddings, contextual retrieval, and conversational AI.",
    skills: [
      { name: "Large Language Models (LLMs)", highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true, badge: "Deployed" },
      { name: "DistilBERT", highlight: true },
      { name: "Embeddings & Semantic Search", highlight: false },
      { name: "N-gram Language Modeling", highlight: false },
      { name: "Naive Bayes Classification", highlight: false },
      { name: "TF-IDF Information Retrieval", highlight: false },
      { name: "Whisper Speech-to-Text", highlight: false }
    ]
  },
  {
    title: "Libraries & ML Frameworks",
    iconName: "Cpu",
    description: "Battle-tested scientific computing, data manipulation, and deep learning libraries.",
    skills: [
      { name: "PyTorch", highlight: true, badge: "Primary Framework" },
      { name: "Scikit-learn", highlight: true },
      { name: "OpenCV", highlight: true },
      { name: "Pandas", highlight: true },
      { name: "NumPy", highlight: true },
      { name: "Matplotlib & Seaborn", highlight: false },
      { name: "Librosa", highlight: false }
    ]
  },
  {
    title: "Web, Cloud & Engineering Tools",
    iconName: "Globe",
    description: "Full-stack tools, databases, task runners, and developer workflows.",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "React 18", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "PostgreSQL", highlight: false },
      { name: "Redis & Celery", highlight: false },
      { name: "Docker", highlight: false },
      { name: "Git & GitHub", highlight: true },
      { name: "VS Code & Jupyter", highlight: false }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "deepfake-detection",
    title: "Explainable Multimodal Deepfake Detection System",
    shortTitle: "Multimodal Deepfake Detection",
    category: "multimodal",
    categoryLabel: "Multimodal AI & XAI",
    status: "Active Research & Pipeline (Mar 2026 – Present)",
    tagline: "End-to-end multimedia forensics platform combining visual classification, frequency anomalies, and Grad-CAM interpretability.",
    description: "Developed a multimodal deepfake detection system achieving approximately 90%+ accuracy on large datasets exceeding 10,000 samples. Engineered image and video detection pipelines using deep learning architectures and integrated Explainable AI (XAI) methods to generate visual attribution heatmaps that forensic investigators can inspect and trust.",
    problem: "Synthetic media generation tools (GANs, diffusion models, and neural voice cloners) produce deceptive manipulations undetectable by the human eye. Most automated detectors operate as opaque black boxes, making them legally and forensically inadmissible without verifiable visual evidence.",
    solution: "Built a multi-layered forensic architecture combining facial feature extraction via deep neural networks, spatial-frequency domain analysis (2D FFT to spot high-frequency GAN checkerboard artifacts), Error Level Analysis (ELA) for compression discrepancies, and Grad-CAM heatmaps that directly pinpoint manipulated facial regions.",
    modelsAndAlgorithms: [
      "Convolutional Neural Networks (CNN) for facial manipulation detection",
      "Grad-CAM (Gradient-weighted Class Activation Mapping) for spatial saliency",
      "2D Fast Fourier Transform (FFT) for spectral frequency discrepancy analysis",
      "Error Level Analysis (ELA) for compression rate inconsistencies",
      "Score fusion combining spatial and frequency modality probabilities"
    ],
    techStack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    features: [
      "Image and video frame extraction with automated face detection and alignment",
      "Approximately 90%+ accuracy on extensive benchmark datasets (10,000+ samples)",
      "Explainable AI visualization generating pixel-level Grad-CAM heatmaps",
      "Frequency-domain FFT spectrum analysis detecting synthetic grid patterns",
      "Comprehensive forensic report generation with verifiable confidence scores"
    ],
    contributions: [
      "Collaborated in a team of 3 to preprocess 10,000+ raw video frames and facial crops",
      "Built the deep learning model inference pipeline and evaluated classification metrics",
      "Integrated Grad-CAM visualization hooks into PyTorch model layers for forensic explainability",
      "Contributed to data cleaning, validation splits, and testing under varied compression artifacts"
    ],
    challenges: [
      "Mitigating false positives caused by heavy social media compression and downscaling",
      "Synchronizing async Celery tasks with the FastAPI gateway during heavy video frame parsing",
      "Calibrating score fusion thresholds across diverse synthetic generation techniques"
    ],
    limitations: [
      "Current evaluation is benchmarked on standardized datasets; performance may vary under extreme low-resolution or adversarial physical recaptures",
      "Deepfake detection remains an active cat-and-mouse research problem as generative models continuously evolve"
    ],
    futureWork: [
      "Integrating audio-visual synchronization cues (phoneme-viseme lip discrepancies)",
      "Deploying quantized ONNX models for sub-second edge browser inference",
      "Enhancing temporal attention across consecutive video frames"
    ],
    metrics: [
      { label: "Dataset Scale", value: "10,000+ Samples" },
      { label: "Accuracy", value: "~90%+ (Benchmark)" },
      { label: "Team Size", value: "3 Engineers" },
      { label: "Explainability", value: "Grad-CAM + FFT" }
    ],
    architectureFlow: [
      {
        step: 1,
        title: "Ingestion & Face Alignment",
        description: "Uploads undergo frame extraction and MTCNN face landmark detection",
        details: "Extracts normalized 224x224 facial bounding boxes while filtering out blurred or occluded frames."
      },
      {
        step: 2,
        title: "Spatial & Frequency Feature Extraction",
        description: "Parallel pathways analyze visual textures and Fourier frequency spectra",
        details: "CNN processes spatial facial textures while 2D FFT extracts azimuthal average spectral profiles to detect GAN artifacts."
      },
      {
        step: 3,
        title: "Explainability & Grad-CAM Generation",
        description: "Gradients backpropagate to final convolution layers",
        details: "Produces a normalized heat map overlay highlighting synthetic warping, boundary seams, and blending errors."
      },
      {
        step: 4,
        title: "Forensic Report Generation",
        description: "Probability score fusion and verifiable metadata synthesis",
        details: "Aggregates modality scores into a final verdict with explainable visual charts delivered via REST API."
      }
    ],
    githubUrl: "https://github.com/harshita-spec/Explainable-Multimodal-Deepfake-Detection",
    verifiedAccuracyNote: "90%+ accuracy achieved on benchmark datasets (>10,000 samples) as verified in resume. Real-world performance depends on compression levels and unseen generator architectures.",
    accentColor: "from-purple-500 to-indigo-600"
  },
  {
    id: "campus-flow",
    title: "CampusFlow – Smart College Academic Platform with NexusAI",
    shortTitle: "CampusFlow & NexusAI",
    category: "fullstack-rag",
    categoryLabel: "Full-Stack AI & RAG",
    status: "Production Deployed (2026)",
    tagline: "Centralized academic hub with a RAG-powered syllabus assistant and real-time doubt clearing.",
    description: "Built a full-stack academic platform that centralizes study materials, notes, and previous year exam papers organized by semester and subject. Developed NexusAI, an AI assistant delivering fast syllabus Q&A grounded on official lecture notes using a RAG approach. Implemented real-time semester doubt rooms for live chat between students and faculty, secured with role-isolated accounts.",
    problem: "College study materials are scattered across chat groups, leading to outdated syllabus coverage, student confusion before examinations, and delayed doubt resolution between faculty and students.",
    solution: "Designed and deployed CampusFlow: a unified academic portal integrating structured document repositories with NexusAI—a RAG assistant that answers questions solely based on verified lecture notes and VTU curricula, completely eliminating AI hallucinations.",
    modelsAndAlgorithms: [
      "Retrieval-Augmented Generation (RAG) architecture",
      "Document chunking with recursive semantic splitting",
      "Dense vector embeddings for contextual semantic search",
      "Grounded prompt synthesis constraining LLM answers to retrieved context",
      "Role-Based Access Control (RBAC) algorithm with token authorization"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python / FastAPI",
      "RAG & LLM APIs",
      "WebSockets",
      "Role-Based Auth",
      "Cloud Deployment (DuckDNS)"
    ],
    features: [
      "NexusAI: Context-grounded syllabus Q&A assistant built on official lecture notes",
      "Semester & subject structured academic repository for verified notes and papers",
      "Real-time semester doubt rooms enabling live interactive discussions",
      "Role-isolated verified accounts distinguishing students, faculty, and administrators",
      "Production deployment accessible live on the web with fast response latency"
    ],
    contributions: [
      "Architected the full-stack system layout and responsive web interface using React and Tailwind",
      "Implemented the NexusAI RAG pipeline: document ingestion, chunking, retrieval, and prompt injection",
      "Engineered real-time WebSocket communication channels for live doubt rooms",
      "Configured secure authentication, role permissions, and cloud deployment on live domain"
    ],
    challenges: [
      "Structuring noisy academic PDFs with complex tables and mathematical formulas for clean embedding",
      "Restricting LLM responses strictly to course material without out-of-scope hallucinations",
      "Maintaining low-latency WebSocket connections across concurrent student doubt rooms"
    ],
    limitations: [
      "Answers depend strictly on uploaded syllabus materials; unindexed elective subjects require manual faculty uploads",
      "Mathematical equation rendering in chat is currently undergoing KaTeX formatting refinement"
    ],
    futureWork: [
      "Integrating automated quiz generation directly from uploaded course notes",
      "Adding voice audio transcription for classroom lecture recordings",
      "Implementing hybrid sparse-dense retrieval (BM25 + vector search)"
    ],
    metrics: [
      { label: "Deployment", value: "Live Deployed" },
      { label: "Architecture", value: "RAG + WebSockets" },
      { label: "Module", value: "NexusAI Assistant" },
      { label: "Security", value: "Role-Isolated RBAC" }
    ],
    architectureFlow: [
      {
        step: 1,
        title: "Document Ingestion & Chunking",
        description: "Official notes and syllabi parsed into semantic chunks",
        details: "PDFs and notes are tokenized, cleaned, and split into overlapping windows to preserve contextual continuity."
      },
      {
        step: 2,
        title: "Vector Indexing & Storage",
        description: "Semantic embeddings generated and indexed for fast retrieval",
        details: "Encodes curriculum text into dense embedding spaces for semantic proximity lookups."
      },
      {
        step: 3,
        title: "Contextual Query Retrieval",
        description: "Student query retrieves top-K verified course excerpts",
        details: "Extracts strictly relevant lecture slides and textbook passages matching the query intent."
      },
      {
        step: 4,
        title: "Grounded LLM Generation",
        description: "Context-injected prompt produces accurate, cited answers",
        details: "NexusAI synthesizes a clear answer with citations to lecture modules, guarding against hallucinations."
      }
    ],
    githubUrl: "https://github.com/harshita-spec/CampusFlow-Smart-College-Academic-Platform-",
    liveUrl: "https://campus-flow.duckdns.org",
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "emotion-recognition",
    title: "Multimodal Emotion Recognition System Using Deep Learning",
    shortTitle: "Multimodal Emotion Recognition",
    category: "multimodal",
    categoryLabel: "Multimodal AI & XAI",
    status: "Completed Engineering Platform (Oct 2026)",
    tagline: "Tri-modality affective computing platform fusing Facial Vision (ResNet50), Audio Spectrograms, and NLP with Cross-Attention.",
    description: "An academic-grade deep learning platform combining facial expressions (Vision), speech characteristics (Audio), and speech transcripts (Text). Features Multi-Head Cross-Attention Fusion, Dynamic Modality Masking to gracefully handle missing inputs, and Explainable AI overlays via Grad-CAM heatmaps on facial landmarks.",
    problem: "Human emotion is inherently multimodal. Single-modality classifiers fail when visual angles are compromised, speech audio is muffled, or transcripts lack vocal tone context.",
    solution: "Engineered a robust tri-modality platform uniting ResNet50 for facial visual features, a 2D CNN over 128-band log Mel-Spectrograms for vocal audio, and DistilBERT for transcript text, unified via a Multi-Head Cross-Attention fusion layer with dynamic modality contribution percentages.",
    modelsAndAlgorithms: [
      "ResNet50 convolutional backbone for facial emotion feature extraction",
      "2D CNN trained on 128 log-Mel spectrogram bands for audio prosody",
      "DistilBERT Transformer encoder for linguistic sentiment representations",
      "Multi-Head Cross-Attention fusion layer with late-fusion baselines",
      "Dynamic Modality Masking algorithm for 1, 2, or 3 available inputs",
      "Grad-CAM visual heatmaps and spectral-temporal energy saliency"
    ],
    techStack: [
      "PyTorch",
      "ResNet50",
      "DistilBERT",
      "Whisper STT",
      "Librosa",
      "FastAPI",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Recharts"
    ],
    features: [
      "Tri-modality processing: Vision (facial), Audio (acoustic pitch/energy), Text (linguistics)",
      "Multi-Head Cross-Attention Fusion with dynamic contribution weights ($C_v, C_a, C_t$)",
      "Dynamic Modality Masking: handles missing webcam or audio inputs without crash",
      "Explainability suite: Grad-CAM on facial landmarks and audio energy saliency",
      "Live interactive web workstation with webcam capture and microphone recording"
    ],
    contributions: [
      "Implemented the PyTorch deep learning models for vision and audio representations",
      "Engineered the Multi-Head Cross-Attention fusion module with dynamic masking",
      "Integrated Grad-CAM visualization for facial emotion interpretability",
      "Built the full-stack interactive testing dashboard with React, Tailwind, and FastAPI"
    ],
    challenges: [
      "Aligning asynchronous audio and video timestamps during live browser recording",
      "Preventing model bias when one modality has disproportionately high confidence",
      "Optimizing PyTorch inference latency across 3 separate deep learning backbones"
    ],
    limitations: [
      "Requires adequate lighting and clear microphone input for peak classification accuracy",
      "Cultural variations in subtle emotional expression require larger cross-cultural training data"
    ],
    futureWork: [
      "Temporal recurrent LSTM or Transformer modeling across sustained conversations",
      "Edge mobile model deployment using CoreML and ONNX Runtime",
      "Physiological sensor integration (e.g., heart rate variability)"
    ],
    metrics: [
      { label: "Modalities", value: "Vision, Audio, Text" },
      { label: "Vision Backbone", value: "ResNet50 + Grad-CAM" },
      { label: "Text Backbone", value: "DistilBERT" },
      { label: "Audio", value: "128 Log-Mel Bands" }
    ],
    architectureFlow: [
      {
        step: 1,
        title: "Tri-Modality Capture & Preprocessing",
        description: "Captures face image, audio signal, and transcribed text",
        details: "Normalizes face frames (224x224), converts audio to 128 mel-band spectrograms, and transcribes speech via Whisper."
      },
      {
        step: 2,
        title: "Feature Extraction Encoders",
        description: "Individual backbones extract high-dimensional representations",
        details: "ResNet50 extracts 512-dim visual vectors, 2D CNN extracts 256-dim audio vectors, and DistilBERT outputs 768-dim text vectors."
      },
      {
        step: 3,
        title: "Cross-Attention Fusion & Masking",
        description: "Multi-head cross-attention dynamically weights modalities",
        details: "Dynamically calculates contribution percentages ($C_v, C_a, C_t$) while masking any unavailable channel."
      },
      {
        step: 4,
        title: "Classification & XAI Heatmap",
        description: "Final emotion prediction with Grad-CAM visual evidence",
        details: "Outputs emotion probabilities alongside visual attribution heatmaps highlighting eye/mouth landmark activations."
      }
    ],
    githubUrl: "https://github.com/harshita-spec",
    accentColor: "from-violet-500 to-purple-600"
  },
  {
    id: "healthcare-chatbot",
    title: "Multilingual Healthcare Chatbot using NLP",
    shortTitle: "Multilingual Healthcare Chatbot",
    category: "nlp",
    categoryLabel: "NLP & Conversational AI",
    status: "Completed Academic Prototype (Feb 2026 – May 2026)",
    tagline: "AI-powered conversational triage assistant providing preliminary symptom guidance across multiple languages.",
    description: "Developed an AI-powered multilingual healthcare chatbot that understands and responds to healthcare queries in multiple languages using classical and modern NLP techniques. Implemented text preprocessing, N-gram language modeling, Naive Bayes classification, and TF-IDF based information retrieval with an interactive CLI for real-time symptom analysis.",
    problem: "In multilingual regions, patients facing health symptoms often struggle to find clear, preliminary healthcare guidance in their native language before consulting a doctor.",
    solution: "Engineered an intelligent conversational chatbot capable of detecting language input, normalizing medical symptoms, classifying underlying conditions via Naive Bayes, and retrieving verified medical guidance using TF-IDF similarity.",
    modelsAndAlgorithms: [
      "Automated language detection algorithms",
      "Text preprocessing: tokenization, lemmatization, and stopword filtering",
      "N-gram language modeling for symptom phrase representation",
      "Multinomial Naive Bayes probabilistic classification",
      "TF-IDF (Term Frequency-Inverse Document Frequency) similarity retrieval"
    ],
    techStack: [
      "Python",
      "NLTK",
      "Scikit-learn",
      "TF-IDF Vectorization",
      "Naive Bayes",
      "Interactive CLI",
      "JSON Knowledge Base"
    ],
    features: [
      "Multilingual query understanding and automated language identification",
      "Symptom extraction and severity classification pipeline",
      "TF-IDF based information retrieval from verified medical query repositories",
      "Real-time interactive CLI interface for rapid symptom queries",
      "Clear medical disclaimer emphasizing informational use over clinical diagnosis"
    ],
    contributions: [
      "Curated and preprocessed multilingual medical query and symptom datasets",
      "Built text normalization and N-gram tokenization routines using NLTK and Python",
      "Trained and tuned the Naive Bayes classifier for preliminary condition prediction",
      "Designed the interactive CLI execution loop and conversational safety prompts"
    ],
    challenges: [
      "Handling ambiguous colloquial descriptions of symptoms across regional vocabularies",
      "Balancing high recall for rare medical terms without diluting TF-IDF accuracy",
      "Strictly enforcing ethical and medical boundaries in system responses"
    ],
    limitations: [
      "Designed strictly as an academic prototype for preliminary information triage; does not provide medical diagnosis or replace licensed physicians",
      "Vocabulary coverage is currently limited to curated symptom-condition datasets"
    ],
    futureWork: [
      "Migrating to fine-tuned multilingual LLMs (e.g., Llama 3 or IndicBERT)",
      "Adding speech audio input for vernacular voice query processing",
      "Deploying a secure web and WhatsApp integration for rural community access"
    ],
    metrics: [
      { label: "Domain", value: "Healthcare Triage" },
      { label: "Algorithms", value: "Naive Bayes + TF-IDF" },
      { label: "Interface", value: "Interactive CLI" },
      { label: "Safety", value: "Non-Diagnostic AI" }
    ],
    architectureFlow: [
      {
        step: 1,
        title: "Language Detection & Tokenization",
        description: "Analyzes incoming prompt language and normalizes words",
        details: "Identifies query language and runs tokenization, case-folding, and spelling correction."
      },
      {
        step: 2,
        title: "Symptom Extraction & N-grams",
        description: "Builds unigram and bigram representations of complaints",
        details: "Extracts key symptom entities (e.g., 'severe fever', 'dry cough') while removing conversational noise."
      },
      {
        step: 3,
        title: "Classification & TF-IDF Retrieval",
        description: "Scores symptoms against verified clinical categories",
        details: "Naive Bayes computes condition probabilities while TF-IDF retrieves relevant precautionary advice."
      },
      {
        step: 4,
        title: "Multilingual Response & Advisory",
        description: "Delivers guidance along with medical consultation advisory",
        details: "Presents clear next steps, emergency flags if severe symptoms are detected, and doctor referral prompts."
      }
    ],
    githubUrl: "https://github.com/harshita-spec/Multilingual-Healthcare-Chatbot-using-NLP",
    accentColor: "from-teal-500 to-cyan-600"
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: "iStudio",
    role: "Data Analytics Intern",
    period: "Internship (Online)",
    location: "Online / Remote",
    type: "Industry Internship",
    summary: "Applied data cleaning, visualization, and exploratory data analysis using Python data science libraries to uncover patterns, validate data integrity, and extract actionable insights from real-world datasets.",
    deliverables: [
      "Cleaned, normalized, and imputed real-world unstructured datasets using Pandas and NumPy.",
      "Engineered visual dashboards and exploratory data analysis (EDA) plots with Matplotlib and Seaborn.",
      "Identified trends, anomalous distributions, and statistical correlations to guide decision-making.",
      "Synthesized findings into structured analytical summaries and presentation reports."
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning"
    ],
    metrics: [
      "Real-World Dataset Ingestion",
      "Statistical Hypothesis & EDA",
      "Actionable Insights Delivery"
    ]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning",
    institution: "SJB Institute of Technology (SJBIT)",
    location: "Bengaluru, Karnataka",
    period: "Sep 2023 – Present",
    score: "9.04 / 10",
    scoreLabel: "Cumulative GPA (CGPA)",
    coursework: [
      "Data Structures & Algorithms",
      "Deep Learning & Neural Networks",
      "Computer Vision",
      "Natural Language Processing",
      "Object-Oriented Programming (Java/Python)",
      "Database Management Systems (DBMS / SQL)",
      "Operating Systems",
      "Linear Algebra & Probability"
    ],
    highlights: [
      "Top-tier academic standing with a 9.04/10 CGPA across all completed semesters.",
      "Hands-on research and practical engineering focus on Multimodal AI, Deepfake Detection, and RAG architectures.",
      "Active participant in technical coding clubs, algorithm practice, and collaborative engineering projects."
    ]
  },
  {
    degree: "Pre-University Course (PUC) – PCMCs (Physics, Chemistry, Math, Computer Science)",
    institution: "The New English PU College",
    location: "Bhatkal, Karnataka",
    period: "Jun 2021 – Jun 2023",
    score: "93.83%",
    scoreLabel: "Board Examination Percentage",
    coursework: [
      "Computer Science & Programming Basics",
      "Mathematics & Analytical Reasoning",
      "Physics",
      "Chemistry"
    ],
    highlights: [
      "Graduated with distinction with an aggregate of 93.83%.",
      "Established strong foundational mathematical thinking, calculus, and introductory programming."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Deep Learning for Computer Vision",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning) / IIT Kharagpur",
    category: "AI & Computer Vision",
    description: "Rigorous academic certification covering convolutional neural networks, image classification, object detection, segmentation, and advanced deep learning visual architectures.",
    topics: ["CNN Architectures", "Image Classification", "Object Detection", "Feature Maps", "Backpropagation", "Transfer Learning"],
    credentialStatus: "Completed"
  },
  {
    title: "Introduction to Modern C++",
    issuer: "NPTEL / IIT",
    category: "Programming & Systems",
    description: "In-depth course on modern C++ standards, object-oriented concepts, memory management, STL containers, and high-performance system programming principles.",
    topics: ["Modern C++ (C++11/14/17)", "STL Containers & Algorithms", "Memory Management", "RAII", "Object-Oriented Design"],
    credentialStatus: "Completed"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "100+ LeetCode DSA Problems Solved",
    category: "Algorithms & Problem Solving",
    metric: "100+ Solved",
    description: "Consistent problem solver on LeetCode focusing on arrays, strings, trees, dynamic programming, two pointers, and graph algorithms.",
    icon: "Code2",
    highlight: true
  },
  {
    title: "Dual NPTEL Certifications from IITs",
    category: "Technical & Systems Excellence",
    metric: "2 Completed",
    description: "Successfully cleared rigorous proctored NPTEL examinations in Deep Learning for Computer Vision (IIT Kharagpur) and Modern C++.",
    icon: "Award",
    highlight: true
  },
  {
    title: "Top Tier Academic Record: 9.04 CGPA",
    category: "Academic Distinction",
    metric: "9.04 / 10 CGPA",
    description: "Maintaining a cumulative 9.04 CGPA in Bachelor of Engineering (Artificial Intelligence and Machine Learning) at SJBIT Bengaluru.",
    icon: "GraduationCap",
    highlight: true
  },
  {
    title: "93.83% in Pre-University Board Examination",
    category: "Foundational Academic Merit",
    metric: "93.83%",
    description: "Graduated with High Distinction in PCMCs from The New English PU College, Bhatkal.",
    icon: "BookOpen",
    highlight: false
  }
];
