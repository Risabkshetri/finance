// import React, { useState } from 'react';
// import customQRCode from '../assets/qr.png';

// const DownloadReferenceButton = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => setModalIsOpen(true);
//   const closeModal = () => setModalIsOpen(false);

//   const downloadPDF = () => {
//     const element = document.createElement("a");
//     // const file = new Blob([JSON.stringify(transactionCategories, null, 2)], {type: 'text/plain'});
//     element.href = URL.createObjectURL(file);
//     element.download = "https://pdflink.to/54af3dfd/";
//     document.body.appendChild(element);
//     element.click();
//   };

//   return (
//     <div>
//       <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Download Reference Categories
//       </button>
//      {modalIsOpen &&
//       <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>

//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Download Reference Categories</h2>
//           <div className="flex justify-center mb-4">
//             <img src={customQRCode} alt="QR Code" className="w-32 h-32" /> {/* Adjust size as needed */}
//           </div>
//           <button 
//             onClick={downloadPDF}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mb-4"
//           >
//             Download File
//           </button>
//           <button 
//             onClick={closeModal}
//             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//         }
//     </div>
//   );
// };

// export default DownloadReferenceButton;


import React, { useState } from 'react';
import customQRCode from '../assets/qr.png';

const DownloadReferenceButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const downloadPDF = () => {
    window.open("https://pdflink.to/54af3dfd/", "_blank");
  };

  return (
    <div className='mt-5'>
      <button onClick={openModal} className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
        Download Reference Categories
      </button>
     {modalIsOpen &&
      <div className='fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex justify-center items-center'>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Download Reference Categories</h2>
          <div className="flex justify-center mb-4">
            <img src={customQRCode} alt="QR Code" className="w-32 h-32" />
          </div>
          <button 
            onClick={downloadPDF}
            className="bg-green-500 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-900 text-white font-bold py-2 px-4 rounded w-full mb-4"
          >
            Download File
          </button>
          <button 
            onClick={closeModal}
            className="bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full"
          >
            Close
          </button>
        </div>
      </div>
     }
    </div>
  );
};

export default DownloadReferenceButton;