'use client';

export const SimpleDateModaCell = (
  value: string,
  _item: Record<string, any>,
): React.ReactNode => {
  return (
    <div className='text-content'>
      {new Date(value).toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })}
    </div>
  );
};
