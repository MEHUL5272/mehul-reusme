const portfolioData = {
    personal: {
        name: process.env.OWNER_NAME || "Mehul Thakor",
        brand: "MEHUL.DEV",
        role: "Full Stack Web & Mobile Developer",
        tagline: "Building scalable web apps with Node.js, React & cross-platform mobile apps with Flutter.",
        location: "Ahmedabad, Gujarat, India",
        phone: process.env.OWNER_PHONE || "+91 9265153035",
        email: process.env.OWNER_EMAIL || "thakormehul84666@gmail.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        status: "Available for Internships & Entry-Level Roles"
    },
    about: {
        summary: "BCA Dual (BCA + MCA) student at GLS University, currently sharpening full-stack development skills through hands-on projects and intensive practical training at Red & White Multimedia Education.",
        objective: "To start my career in software development as a Full Stack Developer, apply my current knowledge of frontend and backend technologies, contribute to real-world projects, and strengthen my development skills through continuous learning and collaboration.",
        highlights: [
            { label: "Degree", value: "BCA + MCA (Sem 5)" },
            { label: "Core Stack", value: "MERN & EJS" },
            { label: "Mobile", value: "Flutter & Dart" },
            { label: "Location", value: "Ahmedabad, IN" }
        ]
    },
    skills: [
        {
            category: "Frontend Development",
            icon: "fa-code",
            items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "EJS"]
        },
        {
            category: "Backend & APIs",
            icon: "fa-server",
            items: ["Node.js", "Express.js", "PHP", "RESTful APIs", "Authentication Flows"]
        },
        {
            category: "Database & Mobile",
            icon: "fa-database",
            items: ["MongoDB", "Flutter", "Dart", "CRUD Operations"]
        },
        {
            category: "Tools & Workflow",
            icon: "fa-wrench",
            items: ["Git", "GitHub", "VS Code", "npm", "Responsive UI"]
        }
    ],
    projects: [
        {
            id: "shree-shyam-coffee",
            title: "Shree Shyam Coffee",
            category: "Full Stack E-Commerce",
            badge: "In Development",
            featured: true,
            description: "Business-focused e-commerce web application featuring separate customer-facing storefront and admin management dashboard.",
            features: [
                "User registration & secure authentication flows",
                "Dynamic product categories, listings & shopping cart",
                "Complete Admin CRUD panel for products & categories",
                "Clean MVC-style route and view architecture"
            ],
            tech: ["Node.js", "Express.js", "EJS", "MongoDB", "CSS3", "JavaScript"]
        },
        {
            id: "vehicle-management",
            title: "Vehicle Management System",
            category: "Mobile Application",
            badge: "Academic Project",
            featured: true,
            description: "Cross-platform mobile app designed to track vehicle records, legal documents, expiry dates, and maintenance history.",
            features: [
                "Authentication & full vehicle profile CRUD",
                "Document vault for RC, Insurance & PUC with expiry tracking",
                "Service history logs with cost & next-service reminders"
            ],
            tech: ["Flutter", "Dart"]
        },
        {
            id: "cartzone",
            title: "CartZone",
            category: "Frontend Web App",
            badge: "Practice Project",
            featured: false,
            description: "Component-based e-commerce shopping interface built with React to master reusable UI patterns and state management.",
            features: [
                "Modular reusable React product cards",
                "Interactive shopping cart state & UI flows"
            ],
            tech: ["React.js", "JavaScript", "HTML5", "CSS3"]
        },
        {
            id: "blog-cms",
            title: "Blog Management System",
            category: "Frontend CRUD App",
            badge: "Practice Project",
            featured: false,
            description: "Content management web application enabling full blog lifecycle operations backed by a mock REST server.",
            features: [
                "Create, read, update, and delete (CRUD) blog posts",
                "REST API integration with JSON Server"
            ],
            tech: ["React.js", "JavaScript", "JSON Server"]
        }
    ],
    education: [
        {
            period: "Currently Pursuing (Sem 5)",
            degree: "BCA Dual (BCA + MCA)",
            institution: "GLS University, Ahmedabad",
            detail: "Integrated Master's Track in Computer Applications"
        },
        {
            period: "Currently Pursuing",
            degree: "Full Stack Web Development",
            institution: "Red & White Multimedia Education",
            detail: "Practical Hands-on Engineering Training"
        },
        {
            period: "2022",
            degree: "HSC - 12th Standard (GHSEB)",
            institution: "Saraswati Vidhya Sankul",
            detail: "Score: 55%"
        },
        {
            period: "2020",
            degree: "SSC - 10th Standard (GHSEB)",
            institution: "Saraswati Vidhya Sankul",
            detail: "Score: 45%"
        }
    ]
};

module.exports = portfolioData;
