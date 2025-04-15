export interface IInventoryParams {
  page?: number;
  limit?: number;
  name?: string;
  productId?: string;
  institutionId?: string;
}

export interface IInventoryItemsParams {
  page?: number;
  limit?: number;
  name?: string;
  productId?: string;
  institutionId?: string;
}

export interface IInventoryFilterState
  extends Omit<IInventoryParams, 'page' | 'limit'> {}

export interface IInventory {
  id?: string;
  name: string;
  quantity: number;
  batches: string;
  productId: string;
  institutionId: string;
  institution: string;
}

export interface IInventoryItem {
  id?: string;
  product: string;
  productId: string;
  institution: string;
  institutionId: string;
  barcode: string;
  batchNumber: string;
  expirationDate: string;
  quantity: number;
}

export interface INewInventoryItem {
  productId: string;
  institutionId: string;
  barcode: string;
  batchNumber: string;
  expirationDate: string;
  quantity: number;
}
