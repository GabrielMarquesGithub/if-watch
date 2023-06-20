import { ISelectProps } from "./types";
import * as S from "./styles";

function Select({ options, error, ...rest }: ISelectProps) {
  return (
    <S.Select aria-invalid={error} {...rest}>
      {options.map((option, index) => (
        <option key={option.value + index} value={option.value}>
          {option.text}
        </option>
      ))}
    </S.Select>
  );
}

export { Select };
