// Habilidades, idiomas e intereses. Fuente: docs/hechos.md (local).
import type { Lang } from '../i18n/ui';

type Localized<T> = Record<Lang, T>;

export const technical: { group: Localized<string>; items: string[] }[] = [
  { group: { en: 'Languages', es: 'Lenguajes' }, items: ['Python', 'C', 'C++', 'JavaScript', 'R'] },
  { group: { en: 'AI / ML', es: 'IA / ML' }, items: ['LLM fine-tuning', 'RAG', 'AI agents', 'scikit-learn', 'pandas', 'Hugging Face'] },
  { group: { en: 'Web & APIs', es: 'Web y APIs' }, items: ['FastAPI', 'Flask', 'Node.js', 'HTML', 'CSS'] },
  { group: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' }, items: ['Docker', 'Google Cloud', 'CI/CD', 'GitHub Actions'] },
  { group: { en: 'Data', es: 'Datos' }, items: ['SQL', 'NoSQL', 'PostgreSQL', 'Elasticsearch'] },
  { group: { en: 'Tools', es: 'Herramientas' }, items: ['Linux', 'Git & GitHub', 'n8n'] },
];

export const soft: Localized<string[]> = {
  en: ['Teamwork', 'Autonomy', 'Product & business mindset', 'Creativity', 'Critical thinking & problem solving', 'Effective communication'],
  es: ['Trabajo en equipo', 'Autonomía', 'Visión de producto y negocio', 'Creatividad', 'Pensamiento crítico y resolución de problemas', 'Comunicación efectiva'],
};

/** level: posición en la escala MCER (A1=1 … C2=6); null = nativo. */
export const spoken: { name: Localized<string>; level: Localized<string>; cefr: number | null }[] = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' }, cefr: null },
  { name: { en: 'English', es: 'Inglés' }, level: { en: 'C1', es: 'C1' }, cefr: 5 },
];

export const learning: Localized<string[]> = {
  en: ['Portuguese', 'German'],
  es: ['Portugués', 'Alemán'],
};

export const interests: { icon: 'ball' | 'gamepad' | 'finance' | 'chart' | 'briefcase'; label: Localized<string> }[] = [
  { icon: 'finance', label: { en: 'Finance', es: 'Finanzas' } },
  { icon: 'chart', label: { en: 'Investing', es: 'Inversiones' } },
  { icon: 'briefcase', label: { en: 'Business', es: 'Negocio' } },
  { icon: 'ball', label: { en: 'Team sports', es: 'Deportes en equipo' } },
  { icon: 'gamepad', label: { en: 'Team video games', es: 'Videojuegos en equipo' } },
];

export const skillsText = {
  en: {
    label: 'Skills',
    title: 'Skills, languages & interests',
    technical: 'Technical',
    soft: 'Soft skills',
    spoken: 'Languages',
    learning: 'Learning next',
    interests: 'Interests',
  },
  es: {
    label: 'Habilidades',
    title: 'Habilidades, idiomas e intereses',
    technical: 'Técnicas',
    soft: 'Blandas',
    spoken: 'Idiomas',
    learning: 'Me gustaría aprender',
    interests: 'Intereses',
  },
} satisfies Localized<unknown>;
