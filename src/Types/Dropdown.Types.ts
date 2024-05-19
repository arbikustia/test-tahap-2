type DropdownItem = {
  label: string;
  key: string;
};

type DropdownSeparator = 'separator';

type DropdownMenu = (DropdownItem | DropdownSeparator)[];

export interface dropdownAntdType {
  label: string;
  data: DropdownMenu;
}
