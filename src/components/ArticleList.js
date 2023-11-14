import React from 'react';
import Article from './Article';

export default function ArticleList({ posts }) {
  return (
    <div>
      <main>
        {posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date || 'January 1, 1970'}
            about={post.preview}
          />
        ))}
      </main>
    </div>
  );
}
