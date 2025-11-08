// Portfolio Configuration
const portfolioConfig = {
    name: "Shivam Kumar Yadav",
    email: "shivamyadav00209@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivamyadav-dev/",
    github: "https://github.com/shivamyadav-dev",
    resumeUrl: "assets/Shivam_Kumar_Yadav_Resume.pdf",
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
            title: "Global Translator",
            description: "A sleek Streamlit app that translates text into 100+ languages with instant audio playback and download.",
            github: "https://github.com/shivamyadav-dev/A-Journey-Of-Data-Science/tree/main/Artificial%20Intelligence/Global%20Translator",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_streamlit-python-projectshowcase-activity-7391002009648246784--pGH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Streamlit", "mtranslate", "gTTS"]
        },
        {
            title: "Cryptocurrency Market Forecasting System",
            description: "A Streamlit app that predicts the next-day Bitcoin price using a Random Forest model trained on multi-crypto market data.",
            github: "https://github.com/shivamyadav-dev/A-Journey-Of-Data-Science/tree/main/Machine%20Learning/Cryptocurrency%20Market%20Forecasting%20System",
            demo: "https://www.linkedin.com/in/shivamyadav-dev/",
            tech: ["Python", "Streamlit", "scikit-learn"]
        },
        {
            title: "Financial Risk Analytics Platform",
            description: "A Streamlit-based ML app that predicts whether a loan will be approved using a Logistic Regression model trained on applicant financial and demographic data.",
            github: "https://github.com/shivamyadav-dev/A-Journey-Of-Data-Science/tree/main/Machine%20Learning/Financial%20Risk%20Analytics%20Platform",
            demo: "https://www.linkedin.com/posts/shivamyadav-dev_machinelearning-datascience-python-activity-7389907344857526272-B1es?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWArIBeVY85WeieS8NmNOSLzMXVpqpK0Q",
            tech: ["Python", "scikit-learn", "Pandas","NumPy"]
        },/*
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
    }
};


