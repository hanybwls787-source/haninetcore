"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Circle 1 */}
      <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-3xl
                      top-10 left-10 animate-floatSlow" />

      {/* Circle 2 */}
      <div className="absolute w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl
                      top-1/3 right-10 animate-float" />

      {/* Circle 3 */}
      <div className="absolute w-80 h-80 bg-pink-600/20 rounded-full blur-3xl
                      bottom-10 left-1/4 animate-floatSlower" />

      {/* Circle 4 */}
      <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-3xl
                      bottom-1/3 right-1/4 animate-floatSlow" />
    </div>
  );
}
