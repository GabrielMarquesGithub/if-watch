import { useState, useEffect } from "react";

import { INotificationProps } from "./types";
import * as S from "./styles";

import { Text } from "../Text";
import { Icon } from "../Icon";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

function Notification({
  message,
  duration = 3000,
  onClose,
}: INotificationProps) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timeout = setTimeout(() => {
      setShowNotification(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  const closeNotification = () => {
    setShowNotification(false);
    if (onClose) {
      onClose();
    }
  };

  if (!showNotification) {
    return null;
  }

  return (
    <S.Container>
      <div className="content">
        <Text is="p" size="small">
          {message}
        </Text>
        <button className="close-button" onClick={closeNotification}>
          <Icon icon={<CloseIcon />} size="small" />
        </button>
      </div>
    </S.Container>
  );
}

export { Notification };
