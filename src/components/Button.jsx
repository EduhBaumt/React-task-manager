const Button = ({
  children,
  variant = "primary",
  onClick,
  size = "small",
  className,
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white";
    }

    if (variant === "secundary") {
      return "bg-[#EEEEEE] text-[#35383E]";
    }

    if (variant === "ghost") {
      return "bg-transparent text-[#818181]";
    }
  };

  const getSizeClasses = () => {
    if (size === "small") {
      return " py-1 text-xs";
    }

    if (size === "large") {
      return "py-2 text-sm";
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-md px-3 text-xs font-semibold ${className} ${getSizeClasses()} ${getVariantClasses()} cursor-pointer transition hover:opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
