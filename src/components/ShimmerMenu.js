const ShimmerMenu = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Restaurant Header Shimmer */}
      <div className="bg-gray-200 rounded-lg h-8 w-3/4 mx-auto"></div>
      <div className="bg-gray-200 rounded-lg h-6 w-1/2 mx-auto"></div>

      {/* Category Shimmers */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="space-y-4">
          {/* Category Title Shimmer */}
          <div className="bg-gray-200 rounded-lg h-6 w-1/4"></div>

          {/* Item Shimmers */}
          {Array.from({ length: 3 }).map((_, itemIndex) => (
            <div
              key={itemIndex}
              className="flex space-x-4 items-center animate-pulse"
            >
              <div className="bg-gray-200 rounded-lg h-16 w-16"></div>
              <div className="flex-1 space-y-2">
                <div className="bg-gray-200 rounded-lg h-4 w-3/4"></div>
                <div className="bg-gray-200 rounded-lg h-4 w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShimmerMenu;
