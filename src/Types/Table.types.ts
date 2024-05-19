import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  totalPage: number;
  page: number;
  limit: number;
  setPage: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
}
