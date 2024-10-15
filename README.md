# Проект Playstation 5

## 14.10.2024

- ### Разработан макет проекта
- ### Расположили главные элеменеты (Консоль и джойстик на фоне)
- ### Выполнин коммит на gitHub

## Результат на сегоднешний день

![Фото](https://i.imgur.com/Cheu6Ui.png)

```jsx
import background from "../assets/background.png";
import playstation from "../assets/Playstation.png";
import dualshock from "../assets/dualshock.png";

export const MainPage = () => {
    return (
        <div className="relative">
            <img src={background} alt="backgrond" className="relative"/>
            <img src={playstation} alt="" className="absolute top-[390px] left-[400px]"/>
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]"/>
        </div>
    );

};
```