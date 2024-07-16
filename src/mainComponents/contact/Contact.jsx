// ContactForm.jsx
import { useState } from 'react';
import contactService from '../../Appwrite/cofig';
import {Navbar, Footer} from '../../mainComponents/index'


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            await contactService.submitContactForm({ name, email, message });
            setStatus('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <>
        <Navbar />
        <div className="max-w-md mx-auto mt-10">
            <h2 className='text-3xl text-center mb-4'>Contact Us</h2>
            <form onSubmit={handleSubmit} className="bg-slate-100 shadow-lg rounded-md px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="4"
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
                {status && <p className="mt-4 text-center text-sm">{status}</p>}
            </form>
        </div>
        <div className="flex flex-col md:flex-row my-6 justify-center items-center bg-slate-100 py-6">
          <a
            href="https://kshetriai.com"
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 md:mr-4 mb-4 md:mb-0 transition duration-300"
          >
            Visit Us
          </a>
          <a 
            href="mailto:rishab@kshetriai.com"
            className="bg-blue-600 text-white py-2 px-6 rounded-full mb-4 md:mb-0 md:mr-4 hover:bg-blue-700 transition duration-300"
          >
            Email Us
          </a>
          <a
            href="tel:+918130243850"
            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
          >
            Call Us
          </a>
        </div><div>
           
        </div>
        <Footer />
        </>
    );
}

export default Contact;