
import React from "react";
import styles from "./ProgressBar.module.css"
import { ProgressBarType } from "@/type";


const ProgressBar = React.memo(({ max = 0, value, step, onChange }: ProgressBarType) => {
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
});
ProgressBar.displayName = "ProgressBar";
export default ProgressBar;
