import { ReactNode } from "react";

export interface IIconProps {
  icon: ReactNode;
  size?: "small" | "base" | "big" | "huge";
  color?: "info" | "error" | "success";
}
