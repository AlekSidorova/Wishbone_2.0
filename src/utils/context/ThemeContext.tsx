import { createContext } from "react";

//тип для темы
export type Theme = 'light' | 'dark';

//интерфейс для выбора тем
export interface IThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

//создаем новый контекст-значение по умолчанию(если контекст не найден)
export const ThemeContext = createContext<IThemeContextValue | undefined>(undefined);