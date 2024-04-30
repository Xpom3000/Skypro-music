"use client";

import styles from "./Filters.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";
import { filters } from "./data";

export default function Filters((tracksData):(tracksData )) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => (prev === newFilter ? null : newFilter));
  }
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTtitle}>Искать по:</div>
      {/* {filters.map((filter) => ( */}
        <FilterItem
          key={filter.title}
          isOpened={activeFilter === filters[0].title}
          handleFilterClick={handleFilterClick}
          title={filters[0].title}
          value={filters[0].value}
          tracksData={TracksData}
        />
        <FilterItem
        key={filter.title}
        isOpened={activeFilter === filters[1].title}
        handleFilterClick={handleFilterClick}
        title={filters[1].title}
        value={filters[1].value}
        tracksData={TracksData}
      />
      <FilterItem
      key={filter.title}
      isOpened={activeFilter === filters[2].title}
      handleFilterClick={handleFilterClick}
      title={filters[2].title}
      value={filters[2].value}
      tracksData={TracksData}
    />
      {/* ))} */}
    </div>
  );
}
