import React from 'react';
import PostCard from './PostCard';
import postsData from './postsData';

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
          Post Cards
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-screen-2xl mx-auto">
          {postsData.map(({ id, userId, title, body }) => (
            <PostCard
              key={id}
              id={id}
              userId={userId}
              title={title}
              body={body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
