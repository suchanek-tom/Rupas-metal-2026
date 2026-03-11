export interface LanguageOption {
  code: string;
  label: string;
  triggerLabel: string;
}

export interface LanguageSwitcherProps {
  onLanguageChange?: () => void;
}