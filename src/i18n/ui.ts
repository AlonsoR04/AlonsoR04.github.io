// Textos de la interfaz. Contenido respaldado por docs/hechos.md (local).
export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Alonso Ríos Guerra — Software Engineer',
    'meta.description':
      'Software engineer with a focus on business: applied AI, machine learning and Python. Computer Engineering graduate (UC3M, 2026).',
    'a11y.skip': 'Skip to content',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'work.label': 'Featured work',
    'work.title': 'ChurnAnchor',
    'projects.label': 'Other projects',
    'projects.title': 'More things I have built',
    'projects.repo': 'Repository',
    'projects.more': 'More on GitHub',
    'hero.work': 'See ChurnAnchor',
    'lang.switch': 'Ver en español',
    'hero.eyebrow': 'Software Engineer · Applied AI · Cybersecurity',
    'hero.title': 'Where engineering, AI and business meet.',
    'hero.lead':
      'I build software and applied-AI systems that solve business problems: machine learning models, LLM agents and the APIs around them.',
    'hero.cv': 'Download CV',
    'hero.contact': 'Contact me',
    'now.label': 'Now',
    'now.role': 'Cyberdefense Junior Engineer',
    'now.org': 'Indra · Sep 2026 – present',
    'edu.label': 'Education',
    'edu.title': 'BSc Computer Engineering',
    'edu.org': 'Universidad Carlos III de Madrid · 2022–2026',
    'about.label': 'About',
    'about.photoAlt': 'Alonso Ríos Guerra giving a presentation',
    'about.p1':
      'Computer Engineering graduate from Universidad Carlos III de Madrid (2026), based in Madrid. I work on Python backends and applied AI: machine learning models, AI agents with tool use, LLM fine-tuning, REST APIs, Docker and CI/CD.',
    'about.p2':
      'I am drawn to where technology meets business, and I build software that solves concrete problems for the people who use it. My final degree project, ChurnAnchor, pairs a machine learning model with four LLM agents so business teams can see which customers are likely to leave and what to do about it. Since September 2026 I have been a Cyberdefense Junior Engineer at Indra, which adds a security perspective to how I build.',
    'about.p3':
      'Autonomous, analytical and team-oriented. Outside work: finance and investing, team sports and team video games.',
    'contact.label': 'Contact',
    'contact.title': 'Get in touch',
    'footer.copy': '© 2026 Alonso Ríos Guerra',
  },
  es: {
    'meta.title': 'Alonso Ríos Guerra — Ingeniero de software',
    'meta.description':
      'Ingeniero de software con foco en negocio: IA aplicada, machine learning y Python. Graduado en Ingeniería Informática (UC3M, 2026).',
    'a11y.skip': 'Saltar al contenido',
    'nav.work': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'work.label': 'Trabajo destacado',
    'work.title': 'ChurnAnchor',
    'projects.label': 'Otros proyectos',
    'projects.title': 'Otras cosas que he construido',
    'projects.repo': 'Repositorio',
    'projects.more': 'Más en GitHub',
    'hero.work': 'Ver ChurnAnchor',
    'lang.switch': 'View in English',
    'hero.eyebrow': 'Ingeniero de software · IA aplicada · Ciberseguridad',
    'hero.title': 'Donde se unen la ingeniería, la IA y el negocio.',
    'hero.lead':
      'Construyo software y sistemas de IA aplicada que resuelven problemas de negocio: modelos de machine learning, agentes LLM y las APIs que los conectan.',
    'hero.cv': 'Descargar CV',
    'hero.contact': 'Contactar',
    'now.label': 'Ahora',
    'now.role': 'Ingeniero Junior de Ciberdefensa',
    'now.org': 'Indra · sept. 2026 – actualidad',
    'edu.label': 'Formación',
    'edu.title': 'Grado en Ingeniería Informática',
    'edu.org': 'Universidad Carlos III de Madrid · 2022–2026',
    'about.label': 'Sobre mí',
    'about.photoAlt': 'Alonso Ríos Guerra durante una presentación',
    'about.p1':
      'Graduado en Ingeniería Informática por la Universidad Carlos III de Madrid (2026), con base en Madrid. Trabajo en backend con Python e IA aplicada: modelos de machine learning, agentes de IA con herramientas, fine-tuning de LLM, APIs REST, Docker y CI/CD.',
    'about.p2':
      'Me interesa la intersección entre tecnología y negocio, y construyo software que resuelve problemas concretos de sus usuarios. Mi TFG, ChurnAnchor, combina un modelo de machine learning con cuatro agentes LLM para que los equipos de negocio vean qué clientes tienen riesgo de baja y qué hacer al respecto. Desde septiembre de 2026 soy Ingeniero Junior de Ciberdefensa en Indra, lo que suma una perspectiva de seguridad a cómo construyo.',
    'about.p3':
      'Autónomo, analítico y con espíritu de equipo. Fuera del trabajo: finanzas e inversión, deportes y videojuegos en equipo.',
    'contact.label': 'Contacto',
    'contact.title': 'Hablemos',
    'footer.copy': '© 2026 Alonso Ríos Guerra',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export const cvPath: Record<Lang, string> = {
  en: '/assets/docs/cv_alonso_rios_guerra_eng.pdf',
  es: '/assets/docs/cv_alonso_rios_guerra_esp.pdf',
};

export const links = {
  email: 'ariosguerra.business@gmail.com',
  // El slug lleva tilde ("ríos"): va codificado como %C3%AD.
  linkedin: 'https://www.linkedin.com/in/alonso-r%C3%ADos-guerra-a48bbb34a',
  github: 'https://github.com/AlonsoR04',
};
