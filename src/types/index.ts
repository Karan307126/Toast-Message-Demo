export type IconsType = {
  info: JSX.Element;
  success: JSX.Element;
  warning: JSX.Element;
  error: JSX.Element;
};

export type ToastType = {
  id: number;
  type: keyof IconsType;
  message: string;
  duration?: number;
  onClose?: () => void;
};

export type ToastPropsType = Omit<ToastType, "id">;

export type PositionType =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export type UseToastType = {
  ToastComponent: JSX.Element;
  openToast: (toastProps: ToastPropsType) => void;
};
