import { HTMLAttributes } from "react";

export interface IModalProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {
  onClose: () => void;
  open: boolean;
  title?: string;
}
