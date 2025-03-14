import React, { useState } from 'react';
import contactImage from '../assets/keshka.jpg';  // იმპორტი შენი სურათის

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');  // ფორმის სტატუსი

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success');  // წარმატებული გაგზავნა
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setFormStatus('error');  // შეცდომა
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-6"
      style={{
        backgroundImage: `url(${contactImage})`,  // ფონური სურათი
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Contact Us</h1>

        {/* შეტყობინება წარმატების ან შეცდომის შემთხვევაში */}
        {formStatus === 'success' && (
          <div className="text-green-500 text-lg text-center mb-4">
            Your message has been sent successfully!
          </div>
        )}
        {formStatus === 'error' && (
          <div className="text-red-500 text-lg text-center mb-4">
            Please fill out all fields correctly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="text-white text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded bg-opacity-80"  // გამჭვირვალე ფონით
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded bg-opacity-80"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded bg-opacity-80"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
