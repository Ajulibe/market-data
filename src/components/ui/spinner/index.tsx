import { LoadingSpinner } from "./styles";
import React from "react";

interface IProps {
  name?: string;
}

export const Spinner: React.FC<IProps> = () => {
  return (
    <LoadingSpinner data-testid="spinner">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingSpinner>
  );
};
