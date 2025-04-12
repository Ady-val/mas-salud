export interface IInventoryParams {
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
