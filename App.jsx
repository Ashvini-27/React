import { useState } from "react";

function App() {
  const [color, setColor] = useState("#808000"); // olive

  // ✅ Array of colors with HEX values
  const colors = [
    { name: "Red", code: "#ef4444" },
    { name: "Green", code: "#22c55e" },
    { name: "Blue", code: "#3b82f6" },
    { name: "Yellow", code: "#eab308" },
    { name: "Purple", code: "#a855f7" },
    { name: "Black", code: "#000000" },
    { name: "White", code: "#ffffff" },
  ];

  return (
    <div
      className="transition-colors duration-300"
      style={{
        backgroundColor: color,
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-4 bg-white/90 px-5 py-3 rounded-3xl shadow-xl backdrop-blur-md">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.code)}
              className="px-5 py-2 rounded-full font-semibold shadow-md hover:scale-110 transition-transform duration-200"
              style={{
                backgroundColor: c.code,
                color: c.name === "White" ? "black" : "white",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
