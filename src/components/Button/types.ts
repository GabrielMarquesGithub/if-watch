import { ButtonHTMLAttributes } from "react";

type buttonPropsType = Required<
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "title" | "role">
> &
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "onClick" | "aria-expanded"
  >;

export interface IButtonProps extends buttonPropsType {
  role: "submit" | "button" | "link";
  size?: "base" | "small";
  variant?: "transparent" | "none";
  shape?: "squared" | "full";
}
