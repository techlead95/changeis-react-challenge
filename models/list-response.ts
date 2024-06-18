export interface ListResponse<T> {
  status: string;
  code: number;
  total: number;
  data: T[];
}
