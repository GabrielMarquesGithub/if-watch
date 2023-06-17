import { useState, useEffect } from "react";

import { INotificationProps } from "./types";
import * as S from "./styles";

import { Text } from "../Text";
import { Icon } from "../Icon";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { Button } from "../Button";

function Notification({ message, duration = 6, onClose }: INotificationProps) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timeout = setTimeout(() => {
      setShowNotification(false);

      onClose();
    }, duration * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  const closeNotification = () => {
    setShowNotification(false);

    onClose();
  };

  if (!showNotification) {
    return null;
  }

  return (
    <S.Container>
      <Text is="p" size="small">
        {message}
      </Text>
      <Button
        title="Fechar notificação"
        role="button"
        shape="squared"
        size="small"
        variant="transparent"
        onClick={closeNotification}
      >
        <span>
          <Icon icon={<PlusIcon />} size="small" />
        </span>
      </Button>
    </S.Container>
  );
}

export { Notification };
