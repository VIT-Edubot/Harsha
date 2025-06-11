export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="p-4">
        {/* Responsive container */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

          {/* Logo Section */}
          <div className="bg-orange-300 text-black text-2xl font-bold px-4 py-2 rounded-md mb-4 sm:mb-0">
            LaunchDarkly
          </div>

          {/* Navigation Section */}
          <nav className="bg-gray-100 rounded-md px-4 py-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-gray-800">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 p-6">
        <h2 className="text-4xl font-bold text-gray-700">Welcome to Tailwind CSS</h2>
        <p className="mt-4 text-gray-600">
          This is a simple React app styled with Tailwind CSS. It uses utility classes for quick design and responsiveness.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Learn More
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm text-gray-600 p-4">
        &copy; 2025 LaunchDarkly. All rights reserved.
      </footer>
    </div>
  );
}
