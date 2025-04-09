import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactImage from '../assets/keshka.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }


    const serviceID = 'service_yf7m7fu';
    const templateID = 'template_z1369wg';
    const userID = '8xYOdQAZj3R9iEpgp';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }, userID)
        .then(() => {
          setFormStatus('success');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((error) => {
          console.error('Email sending error:', error);
          setFormStatus('error');
        });
  };

  return (
      <div
          className="min-h-screen bg-cover bg-center bg-fixed p-6"
          style={{
            backgroundImage: `url(${contactImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundBlendMode: 'darken'
          }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h1 className="text-4xl text-white font-bold text-center mb-6">დაგვიკავშირდით</h1>

          {formStatus === 'success' && (
              <div className="text-green-500 text-lg text-center mb-4">
                თქვენი შეტყობინება გაიგზავნა!
              </div>
          )}
          {formStatus === 'error' && (
              <div className="text-red-500 text-lg text-center mb-4">
                გთხოვთ შეავსოთ ყველა ველი
              </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="text-white text-lg">სახელი</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded bg-opacity-80"
                  required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white text-lg">ელ. ფოსტა</label>
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
              <label htmlFor="message" className="text-white text-lg">შეტყობინება</label>
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
              გაგზავნა
            </button>
          </form>
        </div>
      </div>
  );
};

export default Contact;