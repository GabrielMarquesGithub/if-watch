import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

import { IModalProps } from "./types";
import * as S from "./styles";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Text } from "../Text";

function Modal({ open, onClose, children, title }: IModalProps) {
  return (
    <S.Overlay className={`${open && "open"} `} onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header className="close-button">
          <Text is="h3">{title}</Text>
          <Button
            onClick={onClose}
            title="Fechar Modal"
            role="button"
            shape="squared"
            variant="none"
          >
            <span>
              <Icon size="small" icon={<PlusIcon />} />
            </span>
          </Button>
        </header>
        <div>{children}</div>
      </div>
    </S.Overlay>
  );
}

export { Modal };
