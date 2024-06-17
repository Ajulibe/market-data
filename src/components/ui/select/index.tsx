import { Arrow, CustomSelectWrapper, Select } from "./style";

import React from "react";

interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  defaultValue?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultValue,
  ...props
}) => {
  return (
    <CustomSelectWrapper>
      <Select {...props}>
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
