const GridBackground = ({ children }) => {
  return (
    <div className="w-full bg-black  bg-grid-white/[0.2] relative text-white">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     {children}
    </div>
  );
};
export default GridBackground;
