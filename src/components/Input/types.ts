import { InputHTMLAttributes } from "react";

type inputPropsType = Required<
  Pick<
    InputHTMLAttributes<HTMLSelectElement>,
    "type" | "aria-label" | "spellCheck" | "aria-autocomplete" | "placeholder"
  >
> &
  Pick<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export interface IInputProps extends inputPropsType {
  error?: boolean;
}
