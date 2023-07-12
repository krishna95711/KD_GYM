"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", {
        fullName,
        email,
        phoneNumber,
        message,
      });
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setSubmissionStatus("Form submitted successfully!");
      alert("message sent successfully");
    } catch (error) {}
  };

  return (
    <main className="relative py-28 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">Contact</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            We’d love to hear from you! Please fill out the form below.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="text-sm bg-transparent outline-none rounded-lg h-full"
                  >
                    <option value="IN">IN</option>
                    <option value="US">US</option>
                    <option value="MR">MR</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+91 9999999999"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
          {submissionStatus && (
            <p className="text-gray-500 mt-4">{submissionStatus}</p>
          )}
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>
  );
}
// "use client";
// import { useState } from 'react';

// export default function Home() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');
//   const [submissionStatus, setSubmissionStatus] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send the form data to your server or API endpoint
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fullName,
//           email,
//           phoneNumber,
//           message,
//         }),
//       });

//       if (response.ok) {
//         setSubmissionStatus('Form submitted successfully!');
//         // Reset form fields if needed
//         setFullName('');
//         setEmail('');
//         setPhoneNumber('');
//         setMessage('');
//       } else {
//         setSubmissionStatus('An error occurred while submitting the form.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmissionStatus('An error occurred while submitting the form.');
//     }
//   };

//   return (
//     <main className="py-28 bg-gray-900">
//       <div className="max-w-screen-xl mx-auto text-gray-600 px-4 sm:px-8">
//         <div className="max-w-lg space-y-3 mx-auto text-center">
//           <h3 className="text-cyan-400 font-semibold">Contact</h3>
//           <p className="text-white text-3xl font-semibold sm:text-4xl">
//             Get in touch
//           </p>
//           <p className="text-gray-300">
//             We’d love to hear from you! Please fill out the form below.
//           </p>
//         </div>
//         <div className="mt-12 mx-auto bg-white p-8 sm:max-w-lg sm:px-8 sm:rounded-xl">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="font-medium">Full name</label>
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="font-medium">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="font-medium">Phone number</label>
//               <div className="relative mt-2">
//                 <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
//                   <select
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     required
//                     className="text-sm bg-transparent outline-none rounded-lg h-full"
//                   >
//                     <option value="">Select Country</option>
//                     <option value="IN">IN</option>
//                     <option value="US">US</option>
//                     <option value="MR">MR</option>
//                   </select>
//                 </div>
//                 <input
//                   type="tel"
//                   placeholder="Phone number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   required
//                   className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="font-medium">Message</label>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//                 className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
//             >
//               Submit
//             </button>
//           </form>
//           {submissionStatus && <p className="text-gray-500 mt-4">{submissionStatus}</p>}
//         </div>
//       </div>
//       <div
//         className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
//         style={{
//           background:
//             'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
//         }}
//       ></div>
//     </main>
//   );
// }
