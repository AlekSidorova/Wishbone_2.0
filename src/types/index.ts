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
};

//интерфейс для секции с фото (декоративная)
export interface IPhotoSectionProps {
  title: string;
  text: string;
  backgroundImage: string;
  align?: 'left' | 'right';
};

//интерфейс для карточки how we do
export interface IHowWeDoCardProps {
  image: string;
  title: string;
  text: string;
  alt?: string;
}