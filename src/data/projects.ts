// Contenido de proyectos. Fuente única: docs/hechos.md (local). No añadir nada que no esté allí.
import type { Lang } from '../i18n/ui';

type Localized<T> = Record<Lang, T>;

export const churnAnchor = {
  videoId: 'HZxAt6nJWvE',
  stack: ['Python', 'FastAPI', 'LightGBM', 'SHAP', 'Google Gemini', 'SQLAlchemy', 'Docker', 'pytest'],
  text: {
    en: {
      badge: 'Featured · Final degree project',
      subtitle: 'Customer retention with machine learning and intelligent agents',
      summary:
        'Predicts which telecom customers are likely to leave, explains each prediction with SHAP and turns it into retention actions through four Gemini agents.',
      videoLabel: 'Play the ChurnAnchor demo video',
      problemTitle: 'Problem',
      problem:
        'A churn score alone does not help a business team. They need to know who is at risk, why, and what to do next — in plain language.',
      builtTitle: 'What I built',
      built: [
        'A FastAPI backend with 18 REST routes, a LightGBM model and per-customer SHAP explanations.',
        'Four Gemini agents with custom orchestration in Python (no LangChain): recommender, analyst, alert writer and a chat agent.',
        'A chat agent that chains 9 tools over the live system, e.g. find a customer and generate their retention plan.',
        'A 6-view dashboard, scheduled batch runs and PDF reports, deployed with Docker Compose.',
      ],
      stats: [
        { value: '194', label: 'automated tests' },
        { value: '9', label: 'tools for the chat agent' },
      ],
      note: 'Dataset: IBM Telco Customer Churn (7,043 customers). Source code is private.',
    },
    es: {
      badge: 'Destacado · Trabajo de Fin de Grado',
      subtitle: 'Retención de clientes mediante machine learning y agentes inteligentes',
      summary:
        'Predice qué clientes de una teleco tienen más probabilidad de irse, explica cada predicción con SHAP y la convierte en acciones de retención mediante cuatro agentes de Gemini.',
      videoLabel: 'Reproducir el vídeo demo de ChurnAnchor',
      problemTitle: 'Problema',
      problem:
        'Una puntuación de churn por sí sola no ayuda a un equipo de negocio. Necesita saber quién está en riesgo, por qué y qué hacer, en lenguaje claro.',
      builtTitle: 'Qué construí',
      built: [
        'Un backend en FastAPI con 18 rutas REST, un modelo LightGBM y explicaciones SHAP por cliente.',
        'Cuatro agentes de Gemini con orquestación propia en Python (sin LangChain): recomendador, analista, redactor de alertas y agente de chat.',
        'Un agente de chat que encadena 9 herramientas sobre el sistema real, p. ej. buscar un cliente y generar su plan de retención.',
        'Un dashboard de 6 vistas, ejecuciones programadas por lotes e informes PDF, desplegado con Docker Compose.',
      ],
      stats: [
        { value: '194', label: 'tests automáticos' },
        { value: '9', label: 'herramientas del agente de chat' },
      ],
      note: 'Dataset: IBM Telco Customer Churn (7.043 clientes). El código es privado.',
    },
  } satisfies Localized<unknown>,
};

export interface Project {
  title: Localized<string>;
  summary: Localized<string>;
  bullets: Localized<string[]>;
  stack: string[];
  repo: string | null;
}

export const otherProjects: Project[] = [
  {
    title: { en: 'NewsRadar', es: 'NewsRadar' },
    summary: {
      en: 'News dashboard with live RSS ingestion, alerts and email notifications.',
      es: 'Dashboard de noticias con ingesta RSS continua, alertas y avisos por email.',
    },
    bullets: {
      en: [
        'Built a multi-container architecture (API, worker, PostgreSQL, Elasticsearch, MailHog) that starts with one command.',
        'Wrote a worker that ingests RSS every 60 s and triggers configurable alerts; dashboard with KPIs and a word cloud.',
        'Set up CI/CD with GitHub Actions: 78% test coverage and load tests with Locust.',
      ],
      es: [
        'Arquitectura multicontenedor (API, worker, PostgreSQL, Elasticsearch, MailHog) que arranca con un solo comando.',
        'Worker que ingiere RSS cada 60 s y dispara alertas configurables; dashboard con KPIs y nube de palabras.',
        'CI/CD con GitHub Actions: 78 % de cobertura de tests y pruebas de carga con Locust.',
      ],
    },
    stack: ['Python', 'FastAPI', 'Elasticsearch', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    repo: null,
  },
  {
    title: { en: 'Java test suggester with a fine-tuned LLM', es: 'Sugeridor de tests Java con fine-tuning de LLM' },
    summary: {
      en: 'Suggests reusable unit tests for Java methods and generates new ones.',
      es: 'Sugiere tests unitarios reutilizables para métodos Java y genera tests nuevos.',
    },
    bullets: {
      en: [
        'Fine-tuned MiniLM on 700k pairs of Java methods and their tests.',
        'Built a full-stack app (FastAPI + Next.js) that returns the top 5 reusable tests with a code snippet.',
        'Integrated Qwen2.5-Coder to write new tests from scratch.',
      ],
      es: [
        'Fine-tuning de MiniLM sobre 700k pares de métodos Java y sus tests.',
        'Aplicación full-stack (FastAPI + Next.js) que devuelve los 5 tests reutilizables más relevantes con fragmento de código.',
        'Integración de Qwen2.5-Coder para generar tests nuevos desde cero.',
      ],
    },
    stack: ['Python', 'Hugging Face', 'FastAPI', 'Next.js', 'Qwen2.5-Coder'],
    repo: null,
  },
];
