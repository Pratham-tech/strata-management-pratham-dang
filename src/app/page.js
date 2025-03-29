"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-4">
          <a href="/announcements" className="block hover:text-gray-300">📢 Announcements</a>
          <a href="/maintenance" className="block hover:text-gray-300">🛠 Maintenance Requests</a>
          <a href="/committee" className="block hover:text-gray-300">👥 Committee Members</a>
          <a href="/financial-reports" className="block hover:text-gray-300">📊 Financial Reports</a>
          <a href="/contact-feedback" className="block hover:text-gray-300">✉️ Contact & Feedback</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl font-extrabold text-white">Strata Management Portal- Pratham Dang</h1>
            <p className="text-lg text-gray-200 mt-3 max-w-lg">
              Efficient building management at your fingertips. Stay updated, request maintenance, and connect with your community.
            </p>
            <br></br>
            <a href="/maintenance" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300">
              Submit a Request
            </a>
          </div>
        </div>

        {/* Key Features */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl text-black font-semibold mb-2">📢 Stay Updated</h3>
            <p className="text-gray-700">Real-time updates and announcements from management.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl text-black font-semibold mb-2">🛠 Maintenance Requests</h3>
            <p className="text-gray-700">Submit and track maintenance requests effortlessly.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl text-black font-semibold mb-2">👥 Connect with Committee</h3>
            <p className="text-gray-700">Reach out to committee members for support.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What Our Residents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
              <p className="italic text-black">"This portal has made managing our building so much easier!"</p>
              <footer className="mt-2 text-sm font-semibold text-gray-600">— John Applebaum</footer>
            </blockquote>
            <blockquote className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
              <p className="italic text-black">"I love how I can request maintenance directly from my phone."</p>
              <footer className="mt-2 text-sm font-semibold text-gray-600">— Jordan Stapleton</footer>
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t text-gray-600 text-sm text-center">
          <p>© 2025 Strata Management Portal. All rights reserved.</p>
          <nav className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-900">Terms of Service</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}
