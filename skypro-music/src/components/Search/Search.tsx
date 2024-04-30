import { useState } from "react";
import styles from "../Search/Search.module.css";
import { useAppDispatch } from "@/store/hooks";

export default function Search() {
  const [seafchValue, setSeafchValue] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    setSeafchValue(e.target.value);
    
    
  }
  return (
    <div className={styles.centerblockSearch}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}
