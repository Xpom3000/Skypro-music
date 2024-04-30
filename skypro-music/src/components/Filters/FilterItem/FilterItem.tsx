import { FilterItemType, trackType } from "@/type";
import styles from "./FilterItem.module.css";
import classNames from "classnames";
import { order } from "../data";
import { useAppStore } from "@/store/hooks";

export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  tracksData
}: FilterItemType) {
  const optionList = useAppStore((state) => state.playlist.filterOptions.author);
  const dispatch = useAppDispatch();
  const getFilterList = () => {
    if (value !== "order") {
      const array = new Set (tracksData?.map((track: trackType) => track[value] || []);
      return Array.from(array) 
      )
  return order;
    }
  };
const toggleFilter = (item: string) => {
  dispatch(setFilters(author: authorsList.includes(item) ? : authorList.filter((el) => el !== item) : [...authorList, item]))
    
};
  getFilterList();
  return (
    <>
      <div
        onClick={() => handleFilterClick(title)}
        className={classNames(styles.filterButton, styles.btnText, {
          [styles.active]: isOpened,
        })}

        // className={classNames(styles.filterButton, styles.btnText)}
      >
        {title}
      </div>
      {isOpened && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            {getFilterList().map((item) => (
              <li onClick={() => toggleFilter(item)} className={styles.menuItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
