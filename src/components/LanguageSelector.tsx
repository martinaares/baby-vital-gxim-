
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: 'es', flag: '🇪🇸', name: 'language.es' },
  { code: 'en', flag: '🇬🇧', name: 'language.en' },
  { code: 'fr', flag: '🇫🇷', name: 'language.fr' },
  { code: 'de', flag: '🇩🇪', name: 'language.de' },
  { code: 'it', flag: '🇮🇹', name: 'language.it' },
  { code: 'pt', flag: '🇵🇹', name: 'language.pt' },
  { code: 'nl', flag: '🇳🇱', name: 'language.nl' },
  { code: 'pl', flag: '🇵🇱', name: 'language.pl' },
  { code: 'sv', flag: '🇸🇪', name: 'language.sv' },
  { code: 'ro', flag: '🇷🇴', name: 'language.ro' },
  { code: 'cs', flag: '🇨🇿', name: 'language.cs' },
  { code: 'hu', flag: '🇭🇺', name: 'language.hu' },
  { code: 'el', flag: '🇬🇷', name: 'language.el' },
  { code: 'bg', flag: '🇧🇬', name: 'language.bg' },
  { code: 'hr', flag: '🇭🇷', name: 'language.hr' },
  { code: 'da', flag: '🇩🇰', name: 'language.da' },
  { code: 'sk', flag: '🇸🇰', name: 'language.sk' },
  { code: 'sl', flag: '🇸🇮', name: 'language.sl' },
  { code: 'et', flag: '🇪🇪', name: 'language.et' },
  { code: 'fi', flag: '🇫🇮', name: 'language.fi' },
  { code: 'ga', flag: '🇮🇪', name: 'language.ga' },
  { code: 'lv', flag: '🇱🇻', name: 'language.lv' },
  { code: 'lt', flag: '🇱🇹', name: 'language.lt' },
  { code: 'mt', flag: '🇲🇹', name: 'language.mt' },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{t('language.selector')}</label>
      <Select value={i18n.language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map(({ code, flag, name }) => (
            <SelectItem key={code} value={code}>
              <span className="flex items-center gap-2">
                <span>{flag}</span>
                <span>{t(name)}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
