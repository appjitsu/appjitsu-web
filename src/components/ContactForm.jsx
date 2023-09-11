"use client";

export default function ContactForm() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const res = await fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    if (res.status === 200) {
      alert(
        "Thank you for your reaching out to us! We will get back to you as soon as possible."
      );
    } else {
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-white text-2xl font-bold pb-10">
        Contact Us
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <input
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-6">
          <input
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <textarea
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
