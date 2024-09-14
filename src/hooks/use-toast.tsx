import { useCallback, useState } from "react";
import Toast from "../components/toast";
import { PositionType, ToastPropsType, ToastType } from "../types";

const useToast = (position: PositionType = "top-right") => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const openToast = useCallback((toastProps: ToastPropsType) => {
    const newToast: ToastType = {
      id: Date.now(),
      ...toastProps,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== newToast.id)
      );
    }, toastProps.duration || 2500);
  }, []);

  const closeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const ToastComponent = (
    <div className={`${position}`}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={() => closeToast(toast.id)} />
      ))}
    </div>
  );

  return { ToastComponent, openToast };
};

export default useToast;
