
import React, { useState, useEffect } from 'react';
import Navbar from './Komponenty/Navbar';
import PostList from './Komponenty/PostList';
import PostForm from './Komponenty/PostForm';
import PostDetail from './Komponenty/PostDetail';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const selectPost = (post) => {
    setSelectedPost(post);
  };

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    }));
  };

  return (
    <div className="App">
      <Navbar />
      {!selectedPost ? (
        <>
          <PostForm addPost={addPost} />
          <PostList posts={posts} selectPost={selectPost} />
        </>
      ) : (
        <PostDetail post={selectedPost} addComment={addComment} />
      )}
    </div>
  );
}

export default App;
