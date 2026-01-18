import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

//хук для использования контекста в других компонентах
export const useTheme = () => {
  //useContext для получения значения контекста
  const context = useContext(ThemeContext);
  //если не найден - ошибка
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  //возвращаем значение контекста (а именно объект с theme и toggleTheme)
  return context;
};