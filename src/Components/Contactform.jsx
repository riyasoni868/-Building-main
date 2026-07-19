import { useState } from "react";

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      alert("Please fill all required fields");
      return;
    }

    const formData = { name, email, phone, subject, message };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="bg-gray-200 w-full p-6">
      <h1 className="text-4xl font-bold mb-6">Send Message</h1>

      <form onSubmit={handleSendMessage}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="*Name" value={name}
            className="border p-3 border-gray-400 bg-white text-lg w-full"
            onChange={(e) => setName(e.target.value)} />

          <input type="email" placeholder="*Email" value={email}
            className="border p-3 border-gray-400 bg-white text-lg w-full"
            onChange={(e) => setEmail(e.target.value)} />

          <input type="text" placeholder="*Phone Number" value={phone}
            className="border p-3 border-gray-400 bg-white text-lg w-full"
            onChange={(e) => setPhone(e.target.value)} />

          <input type="text" placeholder="Subject" value={subject}
            className="border p-3 border-gray-400 bg-white text-lg w-full"
            onChange={(e) => setSubject(e.target.value)} />
        </div>

        <textarea placeholder="*Write Message..." value={message}
          className="border p-3 border-gray-400 bg-white text-lg w-full h-32 mt-4"
          onChange={(e) => setMessage(e.target.value)} />

        <button
          type="submit"
          className="bg-orange-600 text-white font-semibold text-xl py-3 px-6 mt-6 hover:bg-white hover:text-orange-600 border-2 border-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contactform;