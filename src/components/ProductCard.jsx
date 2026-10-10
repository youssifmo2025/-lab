function ProductCard({ image, name, price, description, category, status }) {
  // Determine badge color based on inventory status
  const getBadgeStyle = () => {
    switch (status) {
      case "In Stock":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Low Stock":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Out of Stock":
        return "bg-rose-100 text-rose-800 border-rose-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {category}
            </span>
            {/* Status Badge */}
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getBadgeStyle()}`}>
              {status}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900">{name}</h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{description}</p>
        </div>

        {/* Price Tag */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Price</span>
          <span className="text-lg font-bold text-slate-900">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;


