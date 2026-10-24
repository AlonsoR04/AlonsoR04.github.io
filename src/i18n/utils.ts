import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Quita el prefijo de idioma: "/es/foo/" -> "/foo/". */
function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  return first in languages ? '/' + rest.join('/') : pathname;
}

/** Misma ruta en otro idioma (el inglés va sin prefijo). */
export function localizePath(pathname: string, lang: Lang): string {
  const base = stripLang(pathname);
  return lang === defaultLang ? base : `/${lang}${base}`;
}
