import React, { InputHTMLAttributes, forwardRef } from "react";

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(
  (props: ICustomInputProps, ref) => {
    return <input ref={ref} {...props} />;
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
