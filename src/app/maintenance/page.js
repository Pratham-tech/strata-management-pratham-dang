"use client";
import { useState } from "react";

export default function Maintenance() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
    file: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.issueType || !formData.description) {
      setMessage("❌ Please fill out all required fields.");
      return;
    }

    console.log("Submitted Data:", formData);
    setMessage("✅ Your maintenance request has been submitted!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      issueType: "",
      description: "",
      file: null,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-4">
          <a href="/" className="block hover:text-gray-300">🏠 Home</a>
          <a href="/announcements" className="block hover:text-gray-300">📢 Announcements</a>
          <a href="/committee" className="block hover:text-gray-300">👥 Committee Members</a>
          <a href="/financial-reports" className="block hover:text-gray-300">📊 Financial Reports</a>
          <a href="/contact-feedback" className="block hover:text-gray-300">✉️ Contact & Feedback</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-black">🛠 Maintenance Requests</h1>
        <p className="text-center text-gray-600 mb-6">
          Submit a request for building maintenance, and our team will assist you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-black">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded border-black"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-black">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded border-black"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-black">Issue Type</label>
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="w-full p-2 border rounded border-black"
              required
            >
              <option value="">Select an issue</option>
              <option value="plumbing">🚰 Plumbing</option>
              <option value="electrical">💡 Electrical</option>
              <option value="heating">🔥 Heating</option>
              <option value="other">🔧 Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-black">Issue Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded border-black"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-black">Upload Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit Request
          </button>

          {message && <p className="text-center mt-4">{message}</p>}
        </form>
      </main>
    </div>
  );
}