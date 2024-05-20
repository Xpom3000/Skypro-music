type Filterstype = {
  title: string;
  value: "author" | "genre" | "order";
}

export const filters: Filterstype[] = [
    {
      title: "Исполнитель",
      value: "author"
    },
    {
      title: "Жанр",
      value: "genre"
    },
    {
      title: "Год выпуска",
      value: "order",
    },
];
  
export const order = [ "По умолчанию", "Сначалa новые", "Сначалa старые"]