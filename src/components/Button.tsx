import React, { FC, MouseEventHandler, ReactNode } from "react";

export type ButonType = "default" | "selected";

interface ButtonProps {
  type?: ButonType;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ type, onClick, children }) => {
  const color = type === "selected" ? "bg-blue" : "bg-yellow";

  return (
    <button
      className={`text-white ${color} rounded-md h-10 text-lg hover:opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
