import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <section className="w-full">
        {/* Header Background */}
        <div
          className="relative bg-center bg-cover h-72 mb-28"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/001/235/998/non_2x/solar-panel-cell-on-dramatic-sunset-sky-background-free-photo.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <h2 className="text-3xl font-semibold text-white underline md:text-4xl">
              Contact Us
            </h2>
            <p className="max-w-2xl mt-4 text-white">
              At DMAX Reinfria LLP, we provide complete renewable energy
              solutions, including solar, wind, and hybrid systems...
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="flex flex-col max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
          {/* Left Info Pane */}
          <div className="p-8 text-white bg-blue-900 md:w-1/3">
            <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
            <p className="mb-6 text-sm">Say something to start a live chat!</p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-blue-300" /> +91 9876543210
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-300" /> demo@gmail.com
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-300" />
                Office No. 302, 3rd Floor, Landmark Arcade, Sanala Road Morbi,
                Gujarat, 363641 India
              </li>
            </ul>

            <div className="flex mt-8 space-x-4">
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
            </div>
          </div>

          {/* Right Form Pane */}
          <div className="p-8 md:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="pb-3 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="pb-3 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="pb-3 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="pb-3 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full pb-1 border-b border-gray-300 resize-none focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 text-white transition bg-blue-900 rounded-md hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto my-8 overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="DMAX Reinfria LLP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123456789!2d70.8181234!3d22.8171234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e60e123456789%3A0xabcdef123456789!2sLandmark%20Arcade%2C%20Sanala%20Road%2C%20Morbi%2C%20Gujarat%20363641%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
