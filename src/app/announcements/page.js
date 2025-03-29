"use client";

import Link from "next/link";

export default function Announcements() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-4">
          <Link href="/" className="block hover:text-gray-300">🏠 Home</Link>
          <Link href="/maintenance" className="block hover:text-gray-300">🛠 Maintenance Requests</Link>
          <Link href="/committee" className="block hover:text-gray-300">👥 Committee Members</Link>
          <Link href="/financial-reports" className="block hover:text-gray-300">📊 Financial Reports</Link>
          <Link href="/contact-feedback" className="block hover:text-gray-300">✉️ Contact & Feedback</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl text-black font-bold text-center">📢 Announcements</h1>
        <p className="text-center text-gray-600 mb-6">
          Stay updated with the latest building notices.
        </p>

        <div className="space-y-4">
          <article className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl text-black font-semibold">🚧 Elevator Maintenance</h2>
            <p className="text-gray-600">The main elevator will be out of service on March 30th for repairs.</p>
          </article>
          <article className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl text-black font-semibold">🔥 Fire Safety Inspection</h2>
            <p className="text-gray-600">Annual fire safety checks will take place on April 5th. Please allow access.</p>
          </article>
          <article className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl text-black font-semibold">🏗️ Parking Lot Renovation</h2>
            <p className="text-gray-600">The underground parking lot will be closed for resurfacing from April 10-15.</p>
          </article>
        </div>
      </main>
    </div>
  );
}
