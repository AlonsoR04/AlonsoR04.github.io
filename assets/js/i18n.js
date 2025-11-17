// Objeto con las traducciones
const translations = {
    es: {
        // Navegación
        nav_inicio: "Inicio",
        nav_about: "¿Quien soy?",
        nav_skills: "Habilidades",
        nav_work: "Proyectos",
        nav_contact: "Contacto",
        
        // Home
        home_title: "Alonso Rios Guerra",
        home_subtitle: "Ingeniero Informático",
        home_download: "Descargar CV",
        
        // About
        about_title: "¿Quien soy?",
        about_name: "Soy Alonso Rios Guerra",
        about_text: "Un estudiante de cuarto año de Ingeniería Informática con sólidos conocimientos en desarrollo web, estructuras de datos, programación orientada a objetos, sistemas distribuidos y machine learning, entre otros. Una persona competitiva y ambiciosa con un alto nivel de responsabilidad y compromiso. Amante de los deportes y videojuegos en equipo. Apasionado por construir soluciones tecnológicas que resuelvan problemas reales.",
        
        // Skills
        skills_title: "Habilidades",
        skills_technical: "Técnicas",
        skills_soft: "Blandas",
        skills_languages: "Idiomas",
        skills_want_learn: "Me gustaría aprender",
        
        // Soft skills
        skills_teamwork: "Trabajo en equipo",
        skills_creativity: "Creatividad",
        skills_critical: "Pensamiento crítico",
        skills_communication: "Comunicación efectiva",
        
        // Languages
        lang_spanish: "Español (Nativo)",
        lang_english: "Inglés (B2)",
        lang_portuguese: "Portugués",
        lang_german: "Alemán",
        
        // Work
        work_title: "Proyectos",
        project1_title: "Modelo de predicción de renuncia de empleados",
        project1_tech: "Tecnologías: Python, scikit-learn, pandas, matplotlib.",
        project1_desc1: "Se aplicaron algoritmos supervisados (KNN, árboles de decisión y SVM) para predecir la probabilidad de abandono laboral.",
        project1_desc2: "Análisis comparativo de modelos en función de su precisión y eficiencia.",
        
        project2_title: "Aplicación distribuida de publicación y descarga de ficheros",
        project2_tech: "Tecnologías: Python, C, Sockets, WebService, RPC, concurrencia.",
        project2_desc1: "Servidor concurrente en C para múltiples conexiones de clientes Python.",
        project2_desc2: "Servidor RPC que registraba todas las acciones realizadas.",
        project2_desc3: "Sistema Peer-to-Peer para compartir ficheros entre clientes sin pasar por un servidor central.",
        project2_desc4: "Web Service desplegado para consultar fecha y hora.",
        
        project3_title: "MyHomie! – Asistente de domótica",
        project3_tech: "Tecnologías: Node.js, JavaScript, HTML, CSS, APIs REST, Socket I/O.",
        project3_desc1: "Interfaz web conectada a un backend Node.js.",
        project3_desc2: "Reconocimiento de gestos y comandos de voz desde móvil.",
        project3_desc3: "Uso de diversas APIs para funciones domóticas avanzadas.",
        
        // Contact
        contact_title: "Contacto",
        contact_phone: "Teléfono:",
        contact_email: "Email:",
        contact_linkedin: "LinkedIn:",
        contact_linkedin_link: "Ver Perfil",
        
        // Footer
        footer_copy: "© Alonso Rios Guerra. Template by Bedimcode"
    },
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_work: "Projects",
        nav_contact: "Contact",
        
        // Home
        home_title: "Alonso Rios Guerra",
        home_subtitle: "Computer Engineer",
        home_download: "Download CV",
        
        // About
        about_title: "About Me",
        about_name: "I'm Alonso Rios Guerra",
        about_text: "A fourth-year Computer Science student with solid knowledge in web development, data structures, object-oriented programming, distributed systems, and machine learning, among others. A competitive and ambitious person with a high level of responsibility and commitment. Lover of team sports and team video games. Passionate about building technological solutions that solve real problems.",
        
        // Skills
        skills_title: "Skills",
        skills_technical: "Technical",
        skills_soft: "Soft Skills",
        skills_languages: "Languages",
        skills_want_learn: "I would like to learn",
        
        // Soft skills
        skills_teamwork: "Teamwork",
        skills_creativity: "Creativity",
        skills_critical: "Critical Thinking",
        skills_communication: "Effective Communication",
        
        // Languages
        lang_spanish: "Spanish (Native)",
        lang_english: "English (B2)",
        lang_portuguese: "Portuguese",
        lang_german: "German",
        
        // Work
        work_title: "Projects",
        project1_title: "Employee Resignation Prediction Model",
        project1_tech: "Technologies: Python, scikit-learn, pandas, matplotlib.",
        project1_desc1: "Supervised algorithms (KNN, decision trees, and SVM) were applied to predict the probability of job abandonment.",
        project1_desc2: "Comparative analysis of models based on their accuracy and efficiency.",
        
        project2_title: "Distributed File Publishing and Download Application",
        project2_tech: "Technologies: Python, C, Sockets, WebService, RPC, concurrency.",
        project2_desc1: "Concurrent server in C for multiple Python client connections.",
        project2_desc2: "RPC server that logged all performed actions.",
        project2_desc3: "Peer-to-Peer system for sharing files between clients without going through a central server.",
        project2_desc4: "Deployed Web Service to query date and time.",
        
        project3_title: "MyHomie! – Home Automation Assistant",
        project3_tech: "Technologies: Node.js, JavaScript, HTML, CSS, REST APIs, Socket I/O.",
        project3_desc1: "Web interface connected to a Node.js backend.",
        project3_desc2: "Gesture and voice command recognition from mobile.",
        project3_desc3: "Use of various APIs for advanced home automation functions.",
        
        // Contact
        contact_title: "Contact",
        contact_phone: "Phone:",
        contact_email: "Email:",
        contact_linkedin: "LinkedIn:",
        contact_linkedin_link: "View Profile",
        
        // Footer
        footer_copy: "© Alonso Rios Guerra. Template by Bedimcode"
    }
};

// Variable para almacenar el idioma actual
let currentLanguage = localStorage.getItem('language') || 'es';

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

// Función para obtener una traducción
function t(key) {
    return translations[currentLanguage][key] || translations['es'][key];
}

// Función para actualizar todos los textos de la página
function updatePageLanguage() {
    // Actualizar atributos data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
            element.value = t(key);
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });
    
    // Actualizar URL del CV según el idioma
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        if (currentLanguage === 'en') {
            cvLink.href = 'assets/docs/cv_alonso_rios_guerra_eng.pdf';
        } else {
            cvLink.href = 'assets/docs/cv_alonso_rios_guerra_esp.pdf';
        }
    }
    
    // Actualizar html lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Actualizar botón de idioma activo
    updateLanguageButtons();
}

// Función para actualizar el estado de los botones de idioma
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${currentLanguage}"]`)?.classList.add('active');
}

// Inicializar la página cuando carga
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
});
