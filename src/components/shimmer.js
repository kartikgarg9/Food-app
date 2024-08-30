const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          className="relative bg-gray-200 rounded-lg overflow-hidden h-48"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
