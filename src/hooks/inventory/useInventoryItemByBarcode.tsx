import { IInventoryItem } from '@mas-salud/interfaces/inventory';
import { findInventoryItemByBarcode } from '@mas-salud/lib/apiClient';
import { useEffect, useState } from 'react';

export const useItemByBarcode = (barcode: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IInventoryItem | null>(null);

  const fetchItem = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const item = await findInventoryItemByBarcode(barcode);

      setData(item);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (barcode) {
      fetchItem();
    } else {
      setData(null);
    }
  }, [barcode]);

  return {
    data,
    isLoading,
    error,
  };
};
