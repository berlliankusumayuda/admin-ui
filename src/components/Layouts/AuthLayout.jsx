import React, { useContext } from 'react'
import Logo from "../Elements/Logo";
import { ThemeContext } from '../../context/themeContext';
import { DarkModeContext } from '../../context/darkModeContext';
import DarkModeToggle from '../Elements/DarkModeToggle';

function AuthLayout(props) {
  const { children } = props
  const { theme } = useContext(ThemeContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <main className={`min-h-screen bg-special-mainBg dark:bg-defaultBlack flex flex-col justify-center items-center p-6 ${theme.name} ${darkMode ? "dark" : ""}`}>
        
        {/* container start */}
        <div className="w-full max-w-sm">
          
          <div className="mb-8">
            <Logo />    
          </div>

          {children}

          {/* Toggle dark/light mode - diletakkan di bawah form login (Soal 6) */}
          <div className="flex justify-center mt-6">
            <DarkModeToggle variant="icon" />
          </div>
        </div>
        {/* container end */}

      </main>
    </>
  )
}

export default AuthLayout;
