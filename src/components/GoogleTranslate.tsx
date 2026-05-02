import { useState, useRef, useEffect } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'zh-CN', label: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

function setGoogleTranslateLanguage(langCode: string) {
  const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (googleCombo) {
    googleCombo.value = langCode;
    googleCombo.dispatchEvent(new Event('change'));
  }
}

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('en');
  const [ready, setReady] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Wait for Google Translate to load
  useEffect(() => {
    const check = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        clearInterval(check);
        setReady(true);
      }
    }, 500);
    return () => clearInterval(check);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (code: string) => {
    setCurrent(code);
    setOpen(false);
    if (ready) {
      setGoogleTranslateLanguage(code);
    }
  };

  const active = LANGUAGES.find((l) => l.code === current) || LANGUAGES[0];

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Hidden Google Translate widget mount point */}
      <div ref={widgetRef} style={{ position: 'absolute', visibility: 'hidden', width: 0, height: 0 }} />

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] font-sans font-medium border border-[#d4a574] rounded-full px-3 py-1.5 hover:bg-[#d4a574] hover:text-[#faf8f5] transition-all duration-300"
      >
        <span className="text-base leading-none">{active.flag}</span>
        <span className="hidden sm:inline">{active.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#f0ebe4] py-2 z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-sm font-sans transition-colors hover:bg-[#f5ede4] ${
                current === lang.code ? 'text-[#d4a574] font-medium' : 'text-[#1a1a1a]'
              }`}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
              {current === lang.code && (
                <svg className="w-4 h-4 ml-auto text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
