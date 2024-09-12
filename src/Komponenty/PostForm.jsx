
import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ addPost }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      author,
      title,
      content,
      date: new Date().toISOString(),
      comments: [],
    };
    addPost(newPost);
    setAuthor('');
    setTitle('');
    setContent('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Jméno autora" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Titulek" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Obsah" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        required 
      />
      <button type="submit">Vytvořit příspěvek</button>
    </form>
  );
};

export default PostForm;
