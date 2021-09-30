/* eslint-disable @typescript-eslint/no-explicit-any */
export class PaginatedResult {
  data: any[];
  meta: {
    total: number;
    take: number;
    page: number;
    last_page: number;
  };
}
