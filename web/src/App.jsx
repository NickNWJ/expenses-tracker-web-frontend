import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-xl font-semibold mb-2">
          Global Dark Mode
        </h1>

        <p className="mb-4 opacity-80">
          All elements inherit theme automatically
        </p>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;