import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ChipProps {
  label: string;
  value: string;
  selected?: boolean;
  variant?: "default" | "color" | "capacity";
  color?: string;
  onClick?: (value: string) => void;
  colorValue?: string;
}

const Chip = ({
  label,
  value,
  selected = false,
  variant = "default",
  color,
  onClick,
  colorValue,
}: ChipProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(value);
    }
  };

  if (variant === "color" && colorValue) {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "relative w-12 h-12 rounded-full transition-all duration-200",
          "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
          selected ? "ring-2 ring-primary ring-offset-2" : ""
        )}
        style={{
          backgroundColor: colorValue,
        }}
        title={label}
      >
        {selected && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Check className="w-5 h-5 text-white drop-shadow-lg" />
          </div>
        )}
      </button>
    );
  }

  if (variant === "capacity") {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "px-4 py-2 rounded-full font-medium transition-all duration-200",
          "text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
          selected
            ? "bg-primary text-white shadow-soft"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "px-4 py-2 rounded-full font-medium transition-all duration-200",
        "text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        selected
          ? "bg-primary text-white shadow-soft"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      )}
    >
      {label}
    </button>
  );
};

export default Chip;
