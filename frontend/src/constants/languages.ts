// Language constants for Chatterbox Multilingual TTS
// Based on the supported languages from chatterbox-tts v0.1.4

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

// All 23 supported languages from the multilingual model
export const SUPPORTED_LANGUAGES: Record<string, LanguageInfo> = {
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦'
  },
  da: {
    code: 'da',
    name: 'Danish',
    nativeName: 'Dansk',
    flag: '🇩🇰'
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪'
  },
  el: {
    code: 'el',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    flag: '🇬🇷'
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸'
  },
  fi: {
    code: 'fi',
    name: 'Finnish',
    nativeName: 'Suomi',
    flag: '🇫🇮'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷'
  },
  he: {
    code: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    flag: '🇮🇱'
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳'
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹'
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵'
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷'
  },
  ms: {
    code: 'ms',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    flag: '🇲🇾'
  },
  nl: {
    code: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    flag: '🇳🇱'
  },
  no: {
    code: 'no',
    name: 'Norwegian',
    nativeName: 'Norsk',
    flag: '🇳🇴'
  },
  pl: {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    flag: '🇵🇱'
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹'
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺'
  },
  sv: {
    code: 'sv',
    name: 'Swedish',
    nativeName: 'Svenska',
    flag: '🇸🇪'
  },
  sw: {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    flag: '🇹🇿'
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷'
  },
  // zh: {
  //   code: 'zh',
  //   name: 'Chinese',
  //   nativeName: '中文',
  //   flag: '🇨🇳'
  // }
};

// Utility functions
export const getLanguageByCode = (code: string): LanguageInfo | undefined => {
  return SUPPORTED_LANGUAGES[code];
};

export const getLanguageDisplayName = (code: string): string => {
  const lang = getLanguageByCode(code);
  return lang ? `${lang.name} (${lang.nativeName})` : code;
};

export const getLanguageName = (code: string): string => {
  const lang = getLanguageByCode(code);
  return lang ? lang.name : code;
};

export const getAllLanguageCodes = (): string[] => {
  return Object.keys(SUPPORTED_LANGUAGES);
};

export const getAllLanguages = (): LanguageInfo[] => {
  return Object.values(SUPPORTED_LANGUAGES);
};

export const getLanguageFlag = (code: string): string => {
  const lang = getLanguageByCode(code);
  if (lang?.flag) {
    return lang.flag;
  }
  return '';
};

// Default language
export const DEFAULT_LANGUAGE = 'it';

// Language options for dropdowns (sorted by English name)
export const LANGUAGE_OPTIONS = Object.values(SUPPORTED_LANGUAGES)
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(lang => ({
    value: lang.code,
    label: `${lang.flag ? lang.flag + ' ' : ''}${lang.name} (${lang.nativeName})`
  }));