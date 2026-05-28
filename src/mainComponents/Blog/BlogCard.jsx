import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BlogCard({ blog }) {
  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border border-gray-200">
      <div className="overflow-hidden">
        <img 
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" 
          src={blog.imageUrl || "https://via.placeholder.com/300x200"} 
          alt={blog.title} 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-bold text-xl mb-2 text-gray-800 line-clamp-2">{blog.title}</h2>
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">{blog.meta}</p>
        <div className="mt-auto pt-4">
          <Link 
            to={blog.url} 
            className="inline-block border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-2 px-6 transition-colors duration-300 ease-in-out text-sm uppercase tracking-wider"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  }).isRequired
};

export default BlogCard;