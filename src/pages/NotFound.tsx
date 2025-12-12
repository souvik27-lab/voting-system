import { useNavigate } from 'react-router-dom';
import { Home, SearchX } from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <SearchX className="w-24 h-24 text-gray-400 mx-auto mb-6" />

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  );
};
