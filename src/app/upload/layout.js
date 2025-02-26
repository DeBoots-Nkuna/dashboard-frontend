export default function UploadLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* simple nav bar */}
      <header className="bg-teal-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Upload Data Center</h1>
      </header>

      {/* main content area */}
      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
}
