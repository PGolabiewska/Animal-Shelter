import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  // 1. Stan przełącznika (false = jasny, true = ciemny)
  const [darkMode, setDarkMode] = useState(false);

  // 2. Ten efekt "podpina" klasę pod cały dokument HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      {/* 3. Dodajemy klasę tła, która reaguje na 'dark' */}
      <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-950">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;