
import React, { useState } from 'react';
import './PostList.css';

const PostList = ({ posts, selectPost }) => {
  const [sortType, setSortType] = useState('newest');

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortType === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="post-list">
      <div className="sort-options">
        <label>Řazení:</label>
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="newest">Nejnovější</option>
          <option value="oldest">Nejstarší</option>
        </select>
      </div>
      {sortedPosts.map(post => (
        <div key={post.id} className="post-summary" onClick={() => selectPost(post)}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <p>{new Date(post.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
