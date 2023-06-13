import { ReactNode } from "react";

export interface IHeaderWithIconProps {
  children?: ReactNode;
  icon: ReactNode;
  title: string;
  full?: boolean;
}
