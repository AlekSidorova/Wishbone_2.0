//интерфейс для шапки
export interface INavLink {
  text: string;
  href: string;
  active?: boolean;
};

//интерфейс для кнопки
export interface IButtonProps {
  children: React.ReactNode;
  href?: string; //если ссылка
  onClick?: () => void; //если кнопка
  className?: string; //дополнительный класс
};

//интерфейс для персональной карточки
export interface IPersonCardProps {
  image: string;
  name: string;
  role: string;
}