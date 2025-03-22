const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center">
      <div className="text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <h2 className="text-xl md:text-3xl font-bold text-white">Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
