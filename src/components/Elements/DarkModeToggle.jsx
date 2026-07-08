import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
}

/**
 * variant="switch" -> dipakai di halaman login (AuthLayout): track + knob berisi icon sun/moon.
 * variant="icon"   -> dipakai di sidebar (MainLayout): tombol icon bulat, sun saat light, moon saat dark.
 */
function DarkModeToggle({ variant = "switch" }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="w-6 h-6 rounded-md bg-special-bg2 dark:bg-white/10 text-gray-02 dark:text-gray-100 flex items-center justify-center cursor-pointer hover:opacity-80 transition mb-2"
      >
        {darkMode ? <MoonIcon width={14} height={14} /> : <SunIcon width={14} height={14} />}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <SunIcon width={16} height={16} className="text-yellow-500" />
      <button
        type="button"
        onClick={toggleDarkMode}
        className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
          darkMode ? "bg-primary" : "bg-gray-300"
        }`}
        aria-label="Toggle dark mode"
      >
        <div
          className={`w-5 h-5 bg-white rounded-full absolute top-0.5 flex items-center justify-center transition-transform ${
            darkMode ? "translate-x-6" : "translate-x-1"
          }`}
        >
          {darkMode ? (
            <MoonIcon width={12} height={12} className="text-primary" />
          ) : (
            <SunIcon width={12} height={12} className="text-yellow-500" />
          )}
        </div>
      </button>
      <MoonIcon width={16} height={16} className="text-gray-400" />
    </div>
  );
}

export default DarkModeToggle;
