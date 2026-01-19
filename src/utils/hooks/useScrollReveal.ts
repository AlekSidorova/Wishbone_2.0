import { useEffect } from 'react';

//интерфейс для хука плавной прокрутки секций
//IntersectionObserver-это встроенный в браузер механизм отслеживания видимости элементов
interface IUseScrollRevealOptions extends IntersectionObserverInit {
  selector?: string; //селектор, который нужно "оживить"
  once?: boolean; //если true то анимация сработает только один раз для кажджого элемента
}

//хук для "оживления" элементов на странице-
//при прокрутке делает так, чтобы блоки плавно появлялись 
export const useScrollReveal = ({
  selector = '.fade-section', //ищем элементы с этим классом
  threshold = 0.2, //анимация запустится, когда элемент на 20% появится в видимой области экрана
  root = null, //наблюдатель следит за видимостью всего окна браузера
  rootMargin = '0px', //отступы вокруг области наблюдения
  once = true, //анимация сработает один раз для каждого элемента
}: IUseScrollRevealOptions = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    //если элементов нет - хук завершает работу
    if (!elements.length) return;

    //IntersectionObserver следит за пересечением элементов с видимой областью экрана
    const observer = new IntersectionObserver(
      //entries массив "событий пересечения" (по одному на каждый элемент)
      //obs сам наблюдатель
      (entries, obs) => {
        entries.forEach((entry) => {
          //если элемент стал виден - добавляем класс с анимацией
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            //если once=true перестаем следить за этим элементом
            //чтобы анимация сработала только один раз 
            if (once) {
              obs.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, root, rootMargin }
    );

    //начинанаем следить за каждым элементом
    elements.forEach((el) => observer.observe(el));

    //функция, которая выполнится при удалении компонента из DOM
    //она отключает наблюдателя, чтобы избежать утечек памяти
    return () => observer.disconnect();
  }, [selector, threshold, root, rootMargin, once]);
};

//стили накидываются например на глобальные стили
/* эффект плавного скролла */
// .fade-section {
//   opacity: 0;
//   transform: translateY(24px);
//   transition: opacity 0.45s ease, transform 0.45s ease;
// }

// .fade-section.visible {
//   opacity: 1;
//   transform: translateY(0);
// }