//интрейфес для лого
export interface ILogoProps {
  className?: string;
}

//типы для иконок
export type TIconProps = {
  className?: string;
};

//тимы для декоративных иконок
export type TDecProps = {
  className?: string;
};

//интерфейс для шапки
export interface INavLink {
  text: string;
  href: string;
  active?: boolean;
}

//интерфейс для кнопки
export interface IButtonProps {
  children: React.ReactNode;
  href?: string; //если ссылка
  onClick?: () => void; //если кнопка
  className?: string; //дополнительный класс
}

//интерфейс для персональной карточки
export interface IPersonCardProps {
  image: string;
  name: string;
  role: string;
}

//интерфейс для секции с фото (декоративная)
export interface IPhotoSectionProps {
  title: string;
  text: string;
  backgroundImage: string;
  align?: 'left' | 'right';
}

//интерфейс для карточки how we do
export interface IHowWeDoCardProps {
  image: string | React.ReactElement;
  title: string;
  text: string;
  alt?: string;
}

//интрейфейс для карточек проектов
export interface IFeaturedProjectItemProps {
  image: string;
  alt: string;
  country?: string;
  title?: string;
}
