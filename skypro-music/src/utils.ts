//Функция для форматирования продолжительности трека
export function durationFormat(duration: number) {
  const minutes = Math.floor (duration / 60);
  const seconds = Math.floor (duration % 60);
  return `${minutes}:${seconds <10 ? `0${seconds}` : `${seconds}`}`
}