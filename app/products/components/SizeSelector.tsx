"use client";

interface SizeSelectorProps {
  selectedSize: number;
  onSizeSelect: (size: number) => void;
}

const SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const OUT_OF_STOCK = [39, 40];

export default function SizeSelector({
  selectedSize,
  onSizeSelect,
}: SizeSelectorProps) {
  return (
    <div className="space-y-4">
      {/* Header with Size Chart link */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold uppercase text-secondary">Size</h3>
        <button className="text-sm font-medium underline uppercase text-secondary hover:text-primary transition-colors">
          Size Chart
        </button>
      </div>

      {/* Responsive Size Grid */}
      <div className="flex flex-wrap gap-2">
        {SIZES.map((size) => {
          const isSelected = selectedSize === size;
          const isOutOfStock = OUT_OF_STOCK.includes(size);

          return (
            <button
              key={size}
              disabled={isOutOfStock}
              onClick={() => onSizeSelect(size)}
              className={`
                w-12 h-12 rounded-md font-semibold text-sm transition-all
                ${
                  isSelected
                    ? "bg-secondary text-white shadow-lg" // Selected State
                    : isOutOfStock
                      ? "bg-gray-200 text-secondary/40 cursor-not-allowed" // Out of Stock State
                      : "bg-white text-secondary border border-transparent hover:border-secondary shadow-sm" // Available State
                }
              `}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
