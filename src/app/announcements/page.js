// src/app/announcements/page.js
import Link from "next/link";
import prisma from "../../../lib/prisma";

export default async function Announcements() {
  const announcements = await prisma.announcement.findMany();

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
          {announcements.map((announcement) => (
            <article key={announcement.id} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-xl text-black font-semibold">{announcement.title}</h2>
              <p className="text-gray-600">{announcement.content}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
