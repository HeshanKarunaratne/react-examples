import { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProp) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
