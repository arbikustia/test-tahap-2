export interface PaginatorProps {
  pageList: number[]
  totalPage?: number
  page: number
  limit: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  setLimit: React.Dispatch<React.SetStateAction<number>>
}

export interface PaginatorApiProps {
  totalPage: number
  page: number
  limit: number
  setPage: (value: number) => void
  setLimit: (value: number) => void
}

export interface PaginationRequest {
  order_by?: string
  SearchTerm?: string
  PageNumber: number
  PageSize: number
  plant?: string
  part?: string
  model?:string
}

export interface SearchProps {
  searchHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export interface InputProps {
  InputHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  name : string
  id?: string
  label: string
  size?: string
  isBold?: boolean
  inputType: string
  disabled?: boolean
}