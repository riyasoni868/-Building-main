import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

function ViewContact() {
  const [contact, setContact] = useState([]);

  // Fetch all contacts
  const getAllContact = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact");
      if (!res.ok) throw new Error("Failed to fetch contacts");
      const data = await res.json();
      setContact(data.allContact);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete");
      getAllContact();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllContact();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">All Contacts</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700 text-sm uppercase tracking-wider">
              <th className="py-3 px-5 border-b">Sr</th>
              <th className="py-3 px-5 border-b">Name</th>
              <th className="py-3 px-5 border-b">Email</th>
              <th className="py-3 px-5 border-b">Subject</th>
              <th className="py-3 px-5 border-b">Message</th>
              <th className="py-3 px-5 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((c, idx) => (
              <tr
                key={c._id}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 text-sm text-gray-700`}
              >
                <td className="py-3 px-5 border-b">{idx + 1}</td>
                <td className="py-3 px-5 border-b">{c.name}</td>
                <td className="py-3 px-5 border-b">{c.email}</td>
                <td className="py-3 px-5 border-b">{c.subject}</td>
                <td className="py-3 px-5 border-b">{c.message}</td>
                <td className="py-3 px-5 border-b">
                  <button
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition duration-200"
                    onClick={() => deleteContact(c._id)}
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {contact.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No contacts found.</p>
      )}
    </div>
  );
}

export default ViewContact;