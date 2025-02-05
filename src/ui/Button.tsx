import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  className?: string;
  to?: string;
  children: ReactNode | string;
  variant?: string;
};
const Button = (props: ButtonProps) => {
  const { className: customClassName, children, to, variant } = props;

  let className = "";
  const primary =
    "inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:bg-orange-600 focus:bg-orange-600";

  if (variant === "primary") {
    className += primary;
  }

  if (customClassName) {
    className = customClassName;
  }

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
};

export default Button;
