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
        <h3 className="font-display font-black uppercase text-sm tracking-tight text-[#232321]">
          Size
        </h3>
        <button className="text-xs font-bold underline uppercase text-[#232321] hover:text-[#4A69E2] transition-colors">
          Size Chart
        </button>
      </div>

      {/* Responsive Size Grid */}
      <div className="grid grid-cols-5 gap-2">
        {SIZES.map((size) => {
          const isSelected = selectedSize === size;
          const isOutOfStock = OUT_OF_STOCK.includes(size);

          return (
            <button
              key={size}
              disabled={isOutOfStock}
              onClick={() => onSizeSelect(size)}
              className={`
                h-12 md:h-14 rounded-xl font-display font-black text-sm transition-all
                ${
                  isSelected
                    ? "bg-[#232321] text-white shadow-lg" // Selected State
                    : isOutOfStock
                      ? "bg-[#D2D1D3] text-[#232321]/40 cursor-not-allowed" // Out of Stock State
                      : "bg-white text-[#232321] border border-transparent hover:border-[#232321] shadow-sm" // Available State
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
