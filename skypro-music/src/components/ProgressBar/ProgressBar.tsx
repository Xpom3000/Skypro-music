import { ChangeEvent } from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarType = {
    max: number | undefined; 
    value: number;
    step: number;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export default function ProgressBar({ max=0, value, step, onChange }:ProgressBarType) {
  return (
    <input
	    className={styles.styledProgressInput} // Применение стилей к ползунку
	    type="range" // Тип элемента - ползунок
	    min="0" // Минимальное значение ползунка
	    max={max} // Максимальное значение, зависит от длительности аудио
	    value={value} // Текущее значение ползунка
	    step={step} // Шаг изменения значения
	    onChange={onChange} // Обработчик события изменения
	  />
  );
}