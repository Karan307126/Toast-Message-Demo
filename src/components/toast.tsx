import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./toast.css";
import { IconsType, ToastPropsType } from "../types";

const itemStyle = { marginRight: "5px" };

const icons: IconsType = {
  info: <AiOutlineExclamationCircle style={itemStyle} />,
  success: <AiOutlineCheckCircle style={itemStyle} />,
  warning: <AiOutlineWarning style={itemStyle} />,
  error: <AiOutlineCloseCircle style={itemStyle} />,
};

const Toast = ({
  type = "info",
  message,
  onClose = () => {},
}: ToastPropsType) => {
  return (
    <div className={`toast ${type}`}>
      {icons[type]}
      {message}
      <AiOutlineClose color="white" className="closeBtn" onClick={onClose} />
    </div>
  );
};

export default Toast;
