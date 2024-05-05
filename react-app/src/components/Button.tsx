interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClose: () => void;
}

const Button = ({ children, onClose, color = "primary" }: Props) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClose}>
      {children}
    </button>
  );
};

export default Button;
