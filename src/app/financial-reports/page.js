// src/app/financial-reports/page.js
import Link from "next/link";
import prisma from "../../../lib/prisma";

export default async function FinancialReports() {
  const reports = await prisma.financialReport.findMany();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-4">
          <Link href="/" className="block hover:text-gray-300">🏠 Home</Link>
          <Link href="/announcements" className="block hover:text-gray-300">📢 Announcements</Link>
          <Link href="/committee" className="block hover:text-gray-300">👥 Committee Members</Link>
          <Link href="/maintenance" className="block hover:text-gray-300">🛠 Maintenance Requests</Link>
          <Link href="/contact-feedback" className="block hover:text-gray-300">✉️ Contact & Feedback</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-6 mx-auto">
        <h1 className="text-2xl font-bold text-black">📊 Financial Reports</h1>
        <p className="mt-2 text-black">View the latest budget, levies, and financial updates.</p>

        <div className="mt-4 space-y-4">
          {reports.map((report) => (
            <a
              key={report.id}
              href={report.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 underline"
            >
              🔹 {report.title}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
