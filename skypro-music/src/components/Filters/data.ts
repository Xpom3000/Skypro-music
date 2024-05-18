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
      title: "Год выпуска",
      value: "order",
    },
    {
      title: "Жанр",
      value: "genre"
    },
];
  
export const order = [ "По умолчанию", "Сначалa новые", "Сначалa старые"]