export interface FormHeaderProps {
    type: "Add" | "Edit"
    title: string
    exitHandler: () => void
  }
  
  export interface FormFooterProps {
    cancelHandler: () => void;
    label?: string
    isEdit?: boolean;
    isLogin?: boolean;
    isLoading?: boolean;
  }