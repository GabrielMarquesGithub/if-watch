import { ICOMPONENT_NAMEProps } from "./types";
import * as S from "./styles";

function COMPONENT_NAME({ ...rest }: ICOMPONENT_NAMEProps) {
  return <div {...rest} />;
}

export { COMPONENT_NAME };
