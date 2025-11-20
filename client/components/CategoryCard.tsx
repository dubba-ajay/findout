import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  id: string;
  name: string;
  icon: ReactNode;
  color: string;
  gradient: string;
  onClick?: () => void;
}

const CategoryCard = ({
  id,
  name,
  icon,
  color,
  gradient,
  onClick,
}: CategoryCardProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <Link
      to={`/search/${id}`}
      onClick={handleClick}
      className="group block w-full"
    >
      <div
        className={cn(
          "glass relative flex items-center gap-4 p-6 rounded-2xl transition-all duration-300",
          "hover:shadow-soft-lg hover:scale-105 cursor-pointer",
          "active:scale-95"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300",
            gradient,
            color
          )}
        >
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>

        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-primary transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
