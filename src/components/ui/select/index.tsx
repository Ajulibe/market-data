import { Arrow, CustomSelectWrapper, Select } from "./style";

import React from "react";

interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  defaultOption: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultOption,
  ...props
}) => {
  return (
    <CustomSelectWrapper>
      <Select {...props}>
        <option value="">{defaultOption}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Arrow />
    </CustomSelectWrapper>
  );
};

export default CustomSelect;
