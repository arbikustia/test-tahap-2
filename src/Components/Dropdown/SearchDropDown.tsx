import { Select } from 'antd';
import React, { FC } from 'react';

type dropdownType = {
  value: string;
  label: string;
}[];

type searchDropdownProps = {
  option?: dropdownType;
  isDisabled?: boolean;
  title?: string;
  defaultSelectedValue?: string | null;
  SelectFunc: (value: string) => void;
};

export const SearchDropDown: FC<searchDropdownProps> = ({
  option,
  title,
  SelectFunc,
  isDisabled = false,
  defaultSelectedValue
}) => {
  // Find the corresponding label for the defaultSelectedValue
  const defaultLabel = option?.find((opt) => opt.value === defaultSelectedValue)?.label || '';

  return (
    <div className="flex flex-col w-full ">
      <label className="text-md font-bold">{title}</label>
      <Select
        showSearch
        style={{ height: 55 }}
        placeholder="Search to Select"
        disabled={isDisabled}
        optionFilterProp="children"
        onChange={(e) => SelectFunc(e)}
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={option}
        defaultValue={defaultSelectedValue}>
        {/* Display the corresponding label for the defaultSelectedValue */}
        {defaultSelectedValue && (
          <Select.Option value={defaultSelectedValue ?? ''}>{defaultLabel}</Select.Option>
        )}
      </Select>
    </div>
  );
};
