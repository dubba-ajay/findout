import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface StoreCardProps {
  id: string;
  name: string;
  distance: string;
  address: string;
  phone: string;
  categoryId: string;
  productId: string;
}

const StoreCard = ({
  id,
  name,
  distance,
  address,
  phone,
  categoryId,
  productId,
}: StoreCardProps) => {
  return (
    <Link
      to={`/preview/${categoryId}/${productId}/${id}`}
      className="block group"
    >
      <div
        className={cn(
          "glass relative p-5 rounded-3xl transition-all duration-300",
          "hover:shadow-soft-xl hover:scale-102 cursor-pointer",
          "border border-gray-100/50"
        )}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {name}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-lg">
                {distance}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
          <p className="line-clamp-2">{address}</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `tel:${phone}`;
            }}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">{phone}</span>
          </button>

          <button
            onClick={(e) => e.preventDefault()}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg",
              "bg-gradient-primary text-white text-sm font-semibold",
              "transition-all duration-200 hover:shadow-soft",
              "group-hover:translate-x-1"
            )}
          >
            Request <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
