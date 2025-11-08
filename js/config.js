// Portfolio Configuration
const portfolioConfig = {
    name: "Shivam Kumar Yadav",
    email: "shivamyadav00209@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivamyadav-dev/",
    github: "https://github.com/shivamyadav-dev",
    resumeUrl: "assets/Resume.pdf",
    tagline: "Turning Data into Intelligent and Autonomous Action",
    hero: {
        titles: [
            "Data Scientist",
            "Generative AI Engineer",
            "Agentic AI Specialist",
            "ML Engineer"
        ],
        ctaButtons: [
            { text: "View My Work", link: "#projects" },
            { text: "Get In Touch", link: "#contact" }
        ]
    },
    about: {
        description: "I'm a passionate Data Scientist and AI Engineer specializing in Generative and Agentic AI systems. With expertise spanning machine learning, data engineering, and intelligent automation, I transform complex data into actionable insights and autonomous solutions. My work focuses on building cutting-edge AI applications that push the boundaries of what's possible with modern technology.",
        stats: [
            { value: "20+", label: "Projects" },
            { value: "10+", label: "Certifications" },
            { value: "5+", label: "Technologies Mastered" }
        ]
    },
    skills: [
        {
            category: "Machine Learning & Deep Learning",
            items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"]
        },
        {
            category: "Generative AI & LLMs",
            items: ["LangChain", "OpenAI API", "Hugging Face", "Stable Diffusion", "RAG"]
        },
        {
            category: "Agentic AI Systems",
            items: ["AutoGPT", "LangGraph", "CrewAI", "Agent Frameworks", "Multi-Agent Systems"]
        },
        {
            category: "Data & Analytics",
            items: ["SQL", "NoSQL", "Data Analytics", "Natural Language Processing", "Python"]
        },
        {
            category: "MLOps & Deployment",
            items: ["MLflow", "FastAPI", "CI/CD"]
        }
    ],
    projects: [
        {
            title: "AI Agent Framework",
            description: "Multi-agent system for autonomous task execution",
            github: "https://github.com/shivamyadav-dev",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["Python", "LangChain", "OpenAI"]
        },
        {
            title: "Generative AI Platform",
            description: "End-to-end platform for content generation",
            github: "https://github.com/shivamyadav-dev",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["Python", "FastAPI", "React"]
        },
        {
            title: "Data Pipeline Orchestrator",
            description: "Scalable ETL pipeline with real-time processing",
            github: "https://github.com/shivamyadav-dev",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["Python", "Apache Airflow", "PostgreSQL"]
        },
        {
            title: "ML Model Deployment",
            description: "Production-ready ML serving infrastructure",
            github: "https://github.com/shivamyadav-dev",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["Docker", "Kubernetes", "MLflow"]
        },
        {
            title: "NLP Chatbot",
            description: "Context-aware conversational AI assistant",
            github: "https://github.com/shivamyadav-dev",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["Python", "TensorFlow", "NLP"]
        },
        {
            title: "Computer Vision System",
            description: "Real-time object detection and tracking",
            github: "https://github.com/shivamyadav-dev",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["PyTorch", "OpenCV", "YOLO"]
        },
        {
            title: "Smart Multilingual Translator with Voice Playback",
            description: "Built with Streamlit, Global Translator Pro instantly converts text into 100+ languages and speaks it back with AI-powered Text-to-Speech. It combines elegant dark-mode UI, searchable language selection, and one-click audio downloads to make translation fast and interactive. Powered by mtranslate and gTTS APIs, it delivers real-time translation and natural-sounding speech — turning everyday language barriers into confident conversations.",
            github: "https://github.com/shivamyadav-dev",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["Python", "Streamlit", "gTTS"]
        }
    ],
    certifications: [
        {
            name: "Oracle Data Science Professional",
            pdfUrl: "assets/oracle_data_science.pdf"
        },
        {
            name: "Oracle Generative AI Professional",
            pdfUrl: "assets/oracle_gen_ai.pdf"
        },
        {
            name: "ISRO AI/ML",
            pdfUrl: "assets/ISRO.pdf"
        },
        {
            name: "Deloitte Data Analytics",
            pdfUrl: "assets/deloitte.pdf"
        },
        {
            name: "EY and Microsoft",
            pdfUrl: "assets/microsoft.pdf"
        },
        {
            name: "IBM Machine Learning",
            pdfUrl: "assets/IBM.pdf"
        },
        {
            name: "Udemy Python",
            pdfUrl: "assets/udemy.pdf"
        },
        {
            name: "Udemy Data Science",
            pdfUrl: "assets/Data_Science.pdf"
        }
    ],
    emailjs: {
        serviceId: "service_af2t7vv", // EmailJS service ID
        templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        publicKey: "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
    }
};


