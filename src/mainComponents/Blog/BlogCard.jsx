// import React from 'react'

// function BlogCard() {
//   return (
//     <div className='w-44 h-64 flex flex-col justify-start items-start shadow-md hover:shadow-lg'>
//        <div>
//         <img src="https://via.placeholder.com/150" alt="" />
//        </div>
//        <div></div>
//     </div>
//   )
// }

// export default BlogCard

import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img className="w-full h-48 object-cover hover:scale-105 transition-shadow duration-1000" src={blog.imageUrl || "https://via.placeholder.com/300x200"} alt={blog.title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{blog.meta}</p>
        <Link 
          to={blog.url} 
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;