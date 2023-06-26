import { SelectHTMLAttributes } from "react";

type selectPropsType = Required<
  Pick<
    SelectHTMLAttributes<HTMLSelectElement>,
    "aria-label" | "spellCheck" | "aria-autocomplete"
  >
> &
  Pick<SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "defaultValue">;

export interface ISelectProps extends selectPropsType {
  options: { text: string; value: string }[];
  error?: boolean;
}
