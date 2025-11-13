import React, { useState, useMemo } from 'react';
import useApi from '../hooks/useApi';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ApiDemo = () => {
  const { data: posts, loading, error, hasMore, loadMore, refetch } = useApi(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="text-center py-8">
          <div className="text-red-600 text-xl mb-4">Error: {error}</div>
          <Button onClick={refetch} variant="primary">
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          API Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Fetching and displaying data from JSONPlaceholder API
        </p>
      </div>

      {/* Search */}
      <Card>
        <div className="flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <Button onClick={refetch} variant="secondary">
            Refresh
          </Button>
        </div>
      </Card>

      {/* Loading State */}
      {loading && posts.length === 0 && (
        <Card>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading posts...</p>
          </div>
        </Card>
      )}

      {/* Posts Grid */}
      <div className="grid gap-6">
        {filteredPosts.map((post, index) => (
          <Card 
            key={post.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                {post.body}
              </p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  Post ID: {post.id}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  User ID: {post.userId}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            variant="primary"
            disabled={loading}
            className="min-w-[200px]"
          >
            {loading ? 'Loading...' : 'Load More Posts'}
          </Button>
        </div>
      )}

      {/* No Results */}
      {!loading && filteredPosts.length === 0 && posts.length > 0 && (
        <Card>
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No posts match your search criteria.
          </div>
        </Card>
      )}
    </div>
  );
};

export default ApiDemo;