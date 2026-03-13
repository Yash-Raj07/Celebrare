import React from 'react';

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-800 truncate">{photo.author}</h3>
        <button
          onClick={() => onToggleFavorite(photo.id)}
          className={`focus:outline-none transition-colors duration-200 ${
            isFavorite ? 'text-red-500' : 'text-gray-300 hover:text-red-400'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
