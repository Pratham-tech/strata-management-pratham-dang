export default function ContactFeedback() {
    return (
        <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-900 text-white p-6 min-h-screen">
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <nav className="space-y-4">
          <a href="/" className="block hover:text-gray-300">🏠 Home</a>
          <a href="/announcements" className="block hover:text-gray-300">📢 Announcements</a>
            <a href="/maintenance" className="block hover:text-gray-300">🛠 Maintenance Requests</a>
            <a href="/financial-reports" className="block hover:text-gray-300">📊 Financial Reports</a>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="p-6 mx-auto">
          <h1 className="text-2xl text-black font-bold">Contact & Feedback</h1>
          <p className="mt-2 text-black">Have concerns or suggestions? Let us know!</p>
  
          {/* Feedback Form */}
          <form className="mt-4 space-y-4">
            <label className="block">
              <span className="text-lg text-black">Your Name</span>
              <input type="text" className="w-full p-2 mt-1 border rounded border-black" required />
            </label>
  
            <label className="block">
              <span className="text-lg text-black">Your Email</span>
              <input type="email" className="w-full p-2 mt-1 border rounded border-black" required />
            </label>
  
            <label className="block">
              <span className="text-lg text-black">Message</span>
              <textarea className="w-full p-2 mt-1 border rounded border-black" rows="4" required></textarea>
            </label>
  
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white">Send Message</button>
          </form>
        </main>
      </div>
    );
  }