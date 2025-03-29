import Link from "next/link";

export default function Committee() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-4">
          <Link href="/" className="block hover:text-gray-300">🏠 Home</Link>
          <Link href="/announcements" className="block hover:text-gray-300">📢 Announcements</Link>
          <Link href="/maintenance" className="block hover:text-gray-300">🛠 Maintenance Requests</Link>
          <Link href="/financial-reports" className="block hover:text-gray-300">📊 Financial Reports</Link>
          <Link href="/contact-feedback" className="block hover:text-gray-300">✉️ Contact & Feedback</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-black">👥 Committee Members</h1>
        <p className="text-center text-gray-600 mb-6">
          Meet the members managing the strata building.
        </p>

        <ul className="space-y-4">
          <li className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl text-black font-semibold">John Smith</h2>
            <p className="text-gray-600">Chairperson</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl text-black font-semibold">Jane Doe</h2>
            <p className="text-gray-600">Secretary</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl text-black font-semibold">Michael Johnson</h2>
            <p className="text-gray-600">Treasurer</p>
          </li>
        </ul>
      </main>
    </div>
  );
}
