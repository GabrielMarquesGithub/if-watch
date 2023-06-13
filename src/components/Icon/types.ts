import { ReactNode } from "react";

export interface IIconProps {
  icon: ReactNode;
  size?: "small" | "base" | "big";
  activated?: boolean;
  background?: boolean;
}
