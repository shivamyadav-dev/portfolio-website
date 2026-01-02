// Portfolio Configuration
const portfolioConfig = {
    name: "Shivam Kumar Yadav",
    email: "shivamyadav00209@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivamyadav-dev/",
    github: "https://github.com/shivamyadav-dev",
    resumeUrl: "assets/SHIVAM_KUMAR_YADAV_Resume_01.pdf",
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
            category: "AI & Machine Learning Frameworks",
            items: ["PyTorch", "TensorFlow", "scikit-learn", "Keras", "XGBoost", "LightGBM","Hugging Face Transformers"]
        },
        {
            category: "Generative AI & LLM Stack",
            items: ["LangChain","RAG Systems","LLaMA","OpenAI GPT","Fine-Tuning","Prompt Engineering","OpenRouter"]
        },
        {
            category: "Agentic AI & Orchestration",
            items: ["CrewAI","n8n","Agentic Workflows","Multi-Agent Systems","Tool-Use Integration"]
        },
        {
            category: "Deep Learning Architectures",
            items: ["CNN","RNN","LSTM","Transfer Learning","YOLO","Computer Vision"]
        },
        {
            category: "NLP & Text Processing",
            items: ["SpaCy","NLTK","TF-IDF","Transformers","Sentiment Analysis","Text Classification"]
        },
        {
            category: "Data Engineering & Analytics",
            items: ["Python","SQL","MySQL","Pandas","Numpy","SciPy","Statistical Modeling","Time Series Analysis"]
        },
        {
            category: "MLOps & Deployment",
            items: ["MLflow","GitHub","GitHub Copilot","Flask","Streamlit","Model Versioning","CI/CD Pipelines"]
        },
        {
            category: "Cloud & Visualization",
            items: ["MS Azure","Power BI","Tableau","Matplotlib","Seaborn"]
        }
    ],
    projects: [
        {
            title: "Enterprise Contract Intelligence Platform | LegalTech",
            description: "RAG-powered legal AI reducing M&A contract review from 4+ hours to 2 minutes with 95%+ accuracy using LangChain, ChromaDB, and cited clause extraction",
            github: "https://github.com/shivamyadav-dev/AskMyDocs",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_rag-genai-aiengineering-activity-7411265987221741568-VPhK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["RAG Systems", "LangChain", "ChromaDB", "LLaMA-3", "Production NLP"]
        },
        {
            title: "Strategic Intelligence Automation System | Market Research",
            description: "Multi-agent platform automating competitive intelligence 96x faster—LangGraph orchestration transforms 8-12 hour research into 5-minute strategic reports",
            github: "https://github.com/shivamyadav-dev/Atlas-Research-Assistant",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_genai-aiengineering-agenticai-activity-7412353147970613248--hjo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Multi-Agent AI", "LangGraph", "Gemini 2.0", "Autonomous Workflows"]
        },
        {
            title: "Medical Accessibility AI Platform | HealthTech",
            description: "Computer vision system preventing medication errors for 200M+ non-English speakers via instant medical document translation and OCR across 100+ languages",
            github: "https://github.com/shivamyadav-dev/Gemini_Vision_Analysis",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_visionai-geminiai-telugu-activity-7409454069397921792-rxkI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Computer Vision","Gemini Vision API", "Multi-Language AI", "Healthcare Compliance"]
        },
        {
            title: "Restaurant Review Sentiment Analyzer",
            description: "Production-ready NLP sentiment classifier that analyzes restaurant reviews with 75.2% accuracy—no APIs, no GPUs, pure scikit-learn.",
            github: "https://github.com/shivamyadav-dev/A-Journey-Of-Data-Science/tree/main/Artificial%20Intelligence/Customer%20feedback%20analysis",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_machinelearning-nlp-sentimentanalysis-ugcPost-7398663117469114368-16kg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Streamlit", "scikit-learn", "NLTK"]
        },
        {
            title: "Global Translator",
            description: "A sleek Streamlit app that translates text into 100+ languages with instant audio playback and download.",
            github: "https://github.com/shivamyadav-dev/A-Journey-Of-Data-Science/tree/main/Artificial%20Intelligence/Global%20Translator",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_streamlit-python-projectshowcase-activity-7391002009648246784--pGH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Streamlit", "mtranslate", "gTTS"]
        },
        {
            title: "Live Webcam Face and Eye Tracking",
            description: "Built a real-time face and eye detection application using Python, OpenCV, and Haar Cascades to process a live webcam feed.",
            github: "https://github.com/shivamyadav-dev/A-Journey-Of-Data-Science/tree/main/Computer%20Vision/real_time_face%26eye_detection",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_computervision-opencv-python-ugcPost-7395002366296489984-18SS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Python", "OpenCV(cv2)", "Haar Cascade"]
        },
        /* 
        {
            title: "Financial Risk Analytics Platform",
            description: "A Streamlit-based ML app that predicts whether a loan will be approved using a Logistic Regression model trained on applicant financial and demographic data.",
            github: "https://github.com/shivamyadav-dev/A-Journey-Of-Data-Science/tree/main/Machine%20Learning/Financial%20Risk%20Analytics%20Platform",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_machinelearning-datascience-python-activity-7389907344857526272-B1es?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Python", "scikit-learn", "Pandas","NumPy"]
        },
        /*
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
        }*/
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
            name: "Deloitte Job Simulation",
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
        },
        {
            name: "Machine Learning Internship",
            pdfUrl: "assets/Machine Learning Internship.pdf"
        },
        {
            name: "NSS C certificate",
            pdfUrl: "assets/nss c certificate.pdf"
        },
        {
            name: "NSS B certificate",
            pdfUrl: "assets/b certificate .pdf"
        },
        {
            name: "Badminton",
            pdfUrl: "assets/badminton .pdf"
        }
    ],
    emailjs: {
        serviceId: "service_af2t7vv", // EmailJS service ID
        templateId: "template_o3xk1xs", // EmailJS template ID
        publicKey: "PCZMY0zjvZs6hVSL-" // EmailJS public key
    },
    web3forms: {
        accessKey: 'c6146f14-269c-4345-a1ad-898af8d43af8'
    }
};


