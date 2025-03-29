export default function FinancialReports() {
    return (
        <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-900 text-white p-6 min-h-screen">
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <nav className="space-y-4">
          <a href="/" className="block hover:text-gray-300">🏠 Home</a>
          <a href="/announcements" className="block hover:text-gray-300">📢 Announcements</a>
          <a href="/committee" className="block hover:text-gray-300">👥 Committee Members</a>
            <a href="/maintenance" className="block hover:text-gray-300">🛠 Maintenance Requests</a>
            <a href="/contact-feedback" className="block hover:text-gray-300">✉️ Contact & Feedback</a>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="p-6 mx-auto">
          <h1 className="text-2xl font-bold text-black">Financial Reports</h1>
          <p className="mt-2 text-black">View the latest budget, levies, and financial updates.</p>
  
          {/* Sample Reports */}
          <div className="mt-4 space-y-4">
            <a href="/files/q1-financial-report.pdf" className="block text-blue-600 underline">
              🔹 Q1 Financial Report (PDF)
            </a>
            <a href="/files/annual-budget.pdf" className="block text-blue-600 underline">
              🔹 Annual Budget (PDF)
            </a>
          </div>
        </main>
      </div>
    );
  }
  