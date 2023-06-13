import { TextareaHTMLAttributes } from "react";

type TextareaPropsType = Required<
  Pick<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "aria-label" | "spellCheck" | "aria-autocomplete" | "placeholder"
  >
> &
  Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">;

export interface ITextareaProps extends TextareaPropsType {
  error?: boolean;
}
