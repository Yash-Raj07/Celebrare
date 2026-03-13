import React from 'react';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b py-6 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Photo Gallery</h1>
          </div>
          <p className="text-sm text-gray-500 hidden sm:block font-medium"></p>
        </div>
      </header>
      
      <Gallery />
      
      <footer className="bg-white border-t py-8 mt-12 text-center text-gray-500 text-sm font-medium">
        <p>© 2026 Photo Gallery Web App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
