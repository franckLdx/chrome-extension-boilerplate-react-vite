import React, { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button
    className="text-white bg-yellow rounded-md h-10 text-lg hover:opacity-80"
    onClick={onClick}
  >
    {children}
  </button>
);
