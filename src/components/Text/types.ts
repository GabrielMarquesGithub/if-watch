import { HTMLAttributes } from "react";

export interface ITextProps
  extends Pick<HTMLAttributes<HTMLParagraphElement>, "children"> {
  is: "p" | "span" | "h1" | "h2" | "h2" | "h3" | "h4" | "h5" | "h6";
  font?: "normal" | "style";
  size?: "small" | "base" | "big" | "huge";
  decoration?: "underline";
  lineLimit?: 1 | 2;
  hover?: boolean;
}
