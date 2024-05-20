import { FilterItemType, trackType } from "@/type";
import styles from "./FilterItem.module.css";
import classNames from "classnames";
import { order } from "../data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilters } from "@/store/features/plailistSlice";
import { useEffect, useState } from "react";

export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  optionList,
}: FilterItemType) {
  const [filterNumber, SetFilterNumber] = useState<number>(0);
  const playlist = useAppSelector((state) => state.playlist.initialTracks);
  const dispatch = useAppDispatch();
  const getFilterList = () => {
    if (value !== "order") {
      const filtrsSet = new Set(
        playlist?.map((track: trackType) => track[value]) || []
      );
      return Array.from(filtrsSet);
    }
    return order;
  };

  const togglerFilter = (item: string) => {
    if (value !== "order" && optionList && optionList instanceof Array) {
      dispatch(
        setFilters({
          [value]: optionList.includes(item)
            ? optionList.filter((el) => el !== item)
            : [...optionList, item],
        })
      );
    } else {
      dispatch(setFilters({ order: item }));
    }
  };
  useEffect(() => {
    if (value !== "order" && optionList) SetFilterNumber(optionList.length);
  }, [optionList]);
  getFilterList();
  return (
    <>
      {isOpened ? (
        <div>
          <div className={styles.titleFilterBox}>
            <div
              onClick={() => handleFilterClick(title)}
              className={classNames(styles.filterButton, styles.btnText, {
                [styles.active]: isOpened,
              })}
            >
              {title}
            </div>
            {filterNumber > 0 && (
              <div className={styles.filterNumber}>{filterNumber}</div>
            )}
          </div>
          <div className={styles.navMenu}>
            <ul className={styles.menuList}>
              {getFilterList().map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    togglerFilter(item);
                  }}
                  className={classNames(styles.menuItem, {
                    [styles.activeMenuItem]:
                      value === "order"
                        ? item === optionList
                        : optionList.includes(item),
                  })}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div
          onClick={() => handleFilterClick(title)}
          className={classNames(styles.filterButton, styles.btnText, {
            [styles.active]: isOpened,
          })}
        >
          {title}
        </div>
      )}
    </>
  );
}
