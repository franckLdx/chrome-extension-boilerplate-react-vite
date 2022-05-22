import React, { FC, MouseEventHandler, ReactNode } from "react";

export type ButonType = "default" | "selected";

export type ButtonAnimationType = "pulse";

export type ButtonCursorType = "pointer" | "progress";

interface ButtonProps {
  className?: string;
  type?: ButonType;
  animationType?: ButtonAnimationType;
  cursorType?: ButtonCursorType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  type,
  animationType,
  cursorType,
  onClick,
  children,
}) => {
  const colorClassName = type === "selected" ? "bg-blue" : "bg-yellow";

  const annimationClassName =
    animationType === "pulse" ? "animate-pulse" : undefined;

  const cursorClassName =
    cursorType === undefined ? undefined : `cursor-${cursorType}`;

  return (
    <button
      className={`text-white ${colorClassName} ${annimationClassName} ${cursorClassName} rounded-md h-10 text-lg hover:opacity-80 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
