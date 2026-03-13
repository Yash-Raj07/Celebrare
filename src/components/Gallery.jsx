import React, { useState, useReducer, useCallback, useMemo } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import { favoritesReducer, initialState } from '../reducers/favoritesReducer';
import SearchBar from './SearchBar';
import PhotoCard from './PhotoCard';

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  // useCallback on the search filter handler
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // useMemo to compute the filtered photo list
  const filteredPhotos = useMemo(() => {
    if (!searchTerm) return photos;
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  const toggleFavorite = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="text-gray-500 font-medium">Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="bg-red-50 p-6 rounded-lg border border-red-100 text-center max-w-md">
          <svg className="mx-auto h-12 w-12 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-lg font-semibold text-red-800 mb-2">Error Loading Photos</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No photos found for "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isFavorite={favorites.includes(photo.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
