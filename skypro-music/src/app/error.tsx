// Обратите внимание, что компонент ошибки – клиентский
'use client';

import { ErrorType } from '@/type';
import { useEffect } from 'react';

export default function Error({ error, reset }: ErrorType) {
  useEffect(() => {
    // Логирование ошибки
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <button onClick={reset}>Попробовать снова</button>
    </div>
  );
}