import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

// Silence specific ZegoCloud errors
const originalConsoleError = console.error;
console.error = function (...args) {
  // Filter out specific ZegoCloud errors
  const errorString = args.join(' ');
  if (
    errorString.includes('network timeout') || 
    errorString.includes('code":1100002') ||
    errorString.includes('code":1100003') ||
    errorString.includes('cannot find data CmdReq')
  ) {
    // Suppress these specific errors
    return;
  }
  // Forward all other errors to the original console.error
  originalConsoleError.apply(console, args);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
