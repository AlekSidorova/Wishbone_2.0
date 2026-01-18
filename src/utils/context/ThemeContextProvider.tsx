import React, { useEffect, useState } from 'react';
import type { Theme } from './ThemeContext';
import { ThemeContext } from './ThemeContext';


//функциональный компонент, который оборачивает дочерние элементы и предоставляет им доступ к теме
//children: React.ReactNode-проп, который принимает любые дочерние элементы реакт
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //функция для определения начальной темы
  const getInitialTheme = (): Theme => {
    //проверяет, сохранена ли тема в localStorage (если да-использует ее)
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) return storedTheme;

    //если не сохранена, проверяет настройку системы (prefers-color-scheme) через window.matchMedia
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    //возвращаем темную или светлую в зависимости от настроек
    return prefersDark ? 'dark' : 'light';
  };

  //создаем локальное состояние текущей темы и функцию для ее изменений
  //начальное значение берется из getInitialTheme
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  //для синхронизации темы с DOM и localStorage
  useEffect(() => {
    //установка атрибута data-theme на теге body(для стилизации CSS)
    document.body.setAttribute('data-theme', theme);
    //сохранение текущей темы в localStorage
    localStorage.setItem('theme', theme);
    //[theme] гарантирует, что эффукт запускается только при изменении темы
  }, [theme]);

  //функция переключения темы
  const toggleTheme = () => {
    //меняем тему на противоположную
    //используется предыдущее значение (prev) для определения новой темы
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  //предоставление контекста дочерним компонентам
  return (
    //обертывает children в провайдер контекста Provider
    //передает в контекст объект с текущей темой и функцией переключения
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
