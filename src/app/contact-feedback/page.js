"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactFeedback() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log(res);

    if (res.ok) {
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

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
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-6 mx-auto">
        <h1 className="text-2xl text-black font-bold">Contact & Feedback</h1>
        <p className="mt-2 text-black">Have concerns or suggestions? Let us know!</p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <label className="block">
            <span className="text-lg text-black">Your Name</span>
            <input
              name="name"
              type="text"
              className="w-full p-2 mt-1 border rounded border-black"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="block">
            <span className="text-lg text-black">Your Email</span>
            <input
              name="email"
              type="email"
              className="w-full p-2 mt-1 border rounded border-black"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="block">
            <span className="text-lg text-black">Message</span>
            <textarea
              name="message"
              className="w-full p-2 mt-1 border rounded border-black"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit" className="px-4 py-2 bg-blue-600 text-white">Send Message</button>
          {status && <p className="mt-2 text-black">{status}</p>}
        </form>
      </main>
    </div>
  );
}
